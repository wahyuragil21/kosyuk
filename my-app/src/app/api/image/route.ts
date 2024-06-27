export const dynamic = 'force-dynamic' // defaults to auto
import { pool } from "@/configDB/pg-config";

import { NextResponse } from "next/server";
import path from "path";

import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer'
import { NextApiRequest } from "next";
import { writeFile } from "fs/promises";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({
  storage: multer.memoryStorage(),
});


export async function POST(request: Request) {
  try {

    const formData = await request.formData();
    const file: any = formData.get("image");
    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    try {
      await writeFile(
        path.join(process.cwd(), "public/assets/" + filename),
        buffer
      );
      return NextResponse.json({ Message: "Success", status: 201 });
    } catch (error) {
      console.log("Error occured ", error);
      return NextResponse.json({ Message: "Failed", status: 500 });
    }



  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 })
  }
}