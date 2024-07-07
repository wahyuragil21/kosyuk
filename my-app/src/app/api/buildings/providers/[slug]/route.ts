export const dynamic = 'force-dynamic' // defaults to auto

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingDetail } from "@/helpers/mapping";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function PATCH(request: Request, { params }: { params: { slug: string } }) {
  const client = await pool.connect();

  try {
    const providerId = request.headers.get('user_id')
    const { slug } = params

    const querySelect = `
        SELECT * FROM "Buildings"
        WHERE slug = '${slug}'`
    const { rows: [{ id }] } = await client.query(querySelect);

    let formData = await request.formData() as FormData
    let key = ['building_name', 'price', 'type', 'category', 'thumbnail', 'address', 'coordinate', 'price', 'description', 'amount']
    let keyArr = ['specification', 'facility', 'rule']
    const mappingData = async () => {
      const data = {} as any;

      const promises = key.map(async (e: string) => {
        if (e === 'thumbnail') {
          const thumbnail = formData.getAll(e)[0] as any;
          if (typeof thumbnail == "string") {
            console.log(e);

            data[e] = thumbnail;
          } else {
            const type = thumbnail.type;
            const buffer = Buffer.from(await thumbnail.arrayBuffer()).toString('base64');
            const dataURI = `data:${type};base64,${buffer}`;
            const res = await cloudinary.uploader.upload(dataURI);
            data[e] = res.secure_url;
          }
        } else {
          data[e] = formData.getAll(e)[0];
        }
      });

      await Promise.all(promises);

      return data;
    };
    let data = await mappingData() as any

    const cleanData = Object.entries(data)
      .filter(([key, value]) => value !== undefined)
      .reduce((obj: any, [key, value]) => {
        obj[key] = value;
        return obj;
      }, {});

    await client.query('BEGIN');

    let query = `
        UPDATE "Buildings"
        SET 
        ${Object.keys(cleanData).map(e => `${e} = '${cleanData[e]}'`).join(', ')}
        WHERE slug = '${slug}'
        `

    const update = await client.query(query)
    if (update.rowCount == 0) {
      await client.query("ROLLBACK")
    }

    keyArr.map(async (e) => {
      const tableName = e.endsWith('y') ? `Building_${e.slice(0, -1)}ies` : `Building_${e}s`

      let queryDelete = `
            DELETE FROM "${tableName}"
            WHERE building_id = '${id}';
            `

      let deleted = await client.query(queryDelete)
      if (deleted.rowCount == 0) {
        await client.query("ROLLBACK")
      }
    })

    keyArr.map(async (e) => {
      let attributes = formData.getAll(e) as any

      const tableName = e.endsWith('y') ? `Building_${e.slice(0, -1)}ies` : `Building_${e}s`
      const values = attributes.map((attr: any) => `('${id}', '${attr}')`).join(", ")

      const query = `INSERT INTO "${tableName}" (building_id, ${e}_id)
            VALUES ${values};`

      let insert = await pool.query(query)
      if (insert.rowCount == 0) {
        await client.query("ROLLBACK")
      }
    })

    await client.query('COMMIT');

    if (update.rowCount == 1) {
      return NextResponse.json({ message: 'success update building' }, { status: 201 })
    }
    return NextResponse.json({ message: "success" }, { status: 201 });

  } catch (error) {
    // console.log(error);
    await client.query('ROLLBACK');
    return NextResponse.json({ error }, { status: 500 })
  } finally {
    client.release();
  }
}
