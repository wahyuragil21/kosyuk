export const dynamic = 'force-dynamic' // defaults to auto
import { Booking } from "../../../types/types"
const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingBookings, mappingDetailBook } from "@/helpers/mapping";
import { makeSlug } from "@/helpers/addSlug";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const role = request.headers.get('user_role')
    const id = request.headers.get('user_id')

    let queryGroupBy = ''
    let queryPhone = ''
    if (role == "user") {
      queryPhone = `u.telp AS provider_telp,`
      queryGroupBy = `  LEFT JOIN 
      "Providers" u ON b.provider_id = u.id
      WHERE bk.user_id = ${id}
      GROUP BY b.id, u.id`
    } else {
      queryPhone = `u.telp AS user_telp,`
      queryGroupBy = `  LEFT JOIN 
      "Users" u ON bk.user_id = u.id
      WHERE u.id = ${id}
      GROUP BY b.id, u.id`
    }

    let query = `
    SELECT 
        b.id,
        b.building_name,
        b.thumbnail,
        b.address,
        b.coordinate,
        b.status,
        b.category,
        b.type,
        b.price,
        b.description,
        b.provider_id,
        b.slug,
        b.amount,
        ${queryPhone}
        COALESCE(json_agg(DISTINCT i.image_url) FILTER (WHERE i.id IS NOT NULL), '[]') AS images,
        COALESCE(json_agg(DISTINCT f.facility_name) FILTER (WHERE f.id IS NOT NULL), '[]') AS facilities,
        COALESCE(json_agg(DISTINCT bk.status) FILTER (WHERE bk.id IS NOT NULL), '[]') AS bookings,
        COALESCE(json_agg(DISTINCT r.rules_name) FILTER (WHERE r.id IS NOT NULL), '[]') AS rules,
        COALESCE(json_agg(DISTINCT s.specification_name) FILTER (WHERE s.id IS NOT NULL), '[]') AS specifications
      FROM 
        "Buildings" b
      LEFT JOIN 
          "Images" i ON b.id = i.building_id
      LEFT JOIN 
          "Building_facilities" bf ON b.id = bf.building_id
      LEFT JOIN 
          "Facilities" f ON bf.facility_id = f.id
      LEFT JOIN 
          "Bookings" bk ON b.id = bk.building_id
      LEFT JOIN 
          "Building_rules" br ON b.id = br.building_id
      LEFT JOIN 
          "Rules" r ON r.id = br.building_id
      LEFT JOIN 
          "Building_specifications" bs ON b.id = bs.building_id
      LEFT JOIN 
          "Specifications" s ON s.id = bs.building_id
    ${queryGroupBy}
      ORDER BY 
          b.id;
  `

    const { rows }: { rows: Booking[] } = await pool.query(query)

    const Bookings: Booking[] = rows

    return NextResponse.json(mappingBookings(Bookings))

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

export async function POST(request: Request) {
  const user_id = request.headers.get('user_id')
  const user_email = request.headers.get('user_email')
  const { building_id, duration, date } = await request.json()
  console.log(date);

  const query = `INSERT INTO "Bookings"(user_id, provider_id, building_id, duration, status, slug, date)
    VALUES ($1,$2,$3,$4,$5,$6,$7)
    RETURNING slug  ;`

  const querySelect = `
  SELECT
  b.id,
  b.building_name,
  p.email,
  p.id as provider_id
  FROM "Buildings"b
  LEFT JOIN "Providers" p ON p.id = b.provider_id
  WHERE b.id = ${building_id}
  `
  const { rows } = await pool.query(querySelect)

  const provider_email = rows[0].email
  const building_name = rows[0].building_name
  const provider_id = rows[0].provider_id
  const insert = await pool.query(query, [user_id, provider_id, building_id, duration, 'PENDING', 'book-' + makeSlug(5), date])

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dzakii8@gmail.com",
      pass: "rytn fylw mddm auhb",
    },
  });
  const info = await transporter.sendMail({
    from: 'Kosyuk', // sender address
    to: user_email, // list of receivers
    subject: "Kosyuk Pemberitahuan Booking", // Subject line
    text: "", // plain text body
    html: `<body>
    <h2>Pemberitahuan Booking</h2>
    <p>Terima kasih telah melakukan booking dengan kami.</p>
    <p>Booking ID: <strong>${insert.rows[0].slug}</strong></p>
    <p>Nama Kost/ Kontrakan: <strong>${building_name}</strong></p>
    <p>Kami akan segera mengkonfirmasi reservasi Anda. Mohon menunggu konfirmasi lebih lanjut dari kami.</p>
    <br>
    <p>Terima kasih.</p>
    </body>`
  });

  const infoProvider = await transporter.sendMail({
    from: 'Kosyuk', // sender address
    to: provider_email, // list of receivers
    subject: "Kosyuk Confirmation Booking", // Subject line
    text: "", // plain text body
    html: `<body>
    <h2>Konfirmasi Pesanan Kost</h2>
    <p>Ada pesanan kost yang perlu dikonfirmasi:</p>
    <p>Nama Kost/ Kontrakan: <strong>${building_name}</strong></p>
    <p>Silakan segera konfirmasi pesanan ini.</p>
    <br>
    <p>Terima kasih.</p>
    </body>`
  });
  return NextResponse.json({ message: `Email terkait detail pesanan telah dikirimkan ke ${user_email}`, bookingId: insert.rows[0].slug }, { status: 201 })
}

export async function PATCH(request: Request) {
  const client = await pool.connect();

  try {
    const providerId = request.headers.get('user_id');
    const role = request.headers.get('user_role');

    if (role !== "provider") {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const { slug, status } = await request.json();
    const { rows: [{ building_id, status: statusBook }] } = await client.query('SELECT * FROM "Bookings" WHERE slug = $1', [slug]);


    const queryAmount = `
      SELECT b.amount
      FROM "Buildings" b
      LEFT JOIN "Bookings" bk ON bk.building_id = b.id
      WHERE b.id = $1
    `;
    const { rows: [{ amount }] } = await client.query(queryAmount, [building_id]);

    if (amount < 1 && status === "ACCEPTED") {
      return NextResponse.json({ message: 'tidak dapat menerima karena sudah penuh' }, { status: 400 });
    }

    if (statusBook === "ACCEPTED") {
      return NextResponse.json({ message: 'pesanan telah diterima' }, { status: 400 });
    }

    await client.query('BEGIN');

    const queryBookingUpdate = `
      UPDATE "Bookings"
      SET status = $1
      WHERE slug = $2 AND provider_id = $3
    `;
    const resultBookingUpdate = await client.query(queryBookingUpdate, [status, slug, providerId]);
    if (resultBookingUpdate.rowCount === 0) {
      await client.query('ROLLBACK');
      return NextResponse.json({ message: 'No booking found to update' }, { status: 404 });
    }

    const queryBuildingUpdate = `
      UPDATE "Buildings"
      SET amount = amount - 1
      WHERE id = $1 AND provider_id = $2
    `;
    await client.query(queryBuildingUpdate, [building_id, providerId]);
    const resultBuildingUpdate = await client.query(queryBuildingUpdate, [building_id, providerId]);
    if (resultBuildingUpdate.rowCount === 0) {
      await client.query('ROLLBACK');
      return NextResponse.json({ message: 'No building found to update' }, { status: 404 });
    }
    await client.query('COMMIT');

    let message = `Pesanan ${slug} `;

    switch (status) {
      case "ACCEPTED":
        message += 'diterima';
        break;
      case "REJECTED":
        message += 'ditolak';
        break;
    }

    return NextResponse.json({ message });

  } catch (error: any) {
    console.error(error);
    await client.query('ROLLBACK');
    return NextResponse.json({ message: 'Terjadi kesalahan', error: error.message }, { status: 500 });
  } finally {
    client.release();
  }
}


export async function DELETE(request: Request) {
  try {

    const userId = request.headers.get('user_id')
    const role = request.headers.get('user_role')

    const { slug, status } = await request.json()

    let queryUser = role == 'provider' ? `WHERE slug = '${slug}' AND provider_id = '${userId}'` : `WHERE slug = '${slug}' AND user_id = '${userId}'`
    const query = `
      DELETE FROM "Bookings"
      ${queryUser}
      RETURNING slug;
    `
    const { rows } = await pool.query(query)
    const updated = rows[0].slug

    return NextResponse.json({ message: `Pesanan ${updated} berhasil dihapus` })

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

