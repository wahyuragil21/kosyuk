export const dynamic = 'force-dynamic' // defaults to auto
import { pool } from "@/configDB/pg-config";

import { NextResponse } from "next/server";
import path from "path";
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    let formData = await request.formData() as FormData
    const files = formData.getAll("images");

    if (files.length === 0) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const uploadPromises = files.map(async (file: any) => {
      let type = file.type;
      let buffer = Buffer.from(await file.arrayBuffer()).toString('base64');
      const dataURI = `data:${type};base64,${buffer}`;

      return (await cloudinary.uploader.upload(dataURI)).secure_url;
    });
    const uploadResponses = await Promise.all(uploadPromises);
    return NextResponse.json({ message: "success" }, { status: 201 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {

    const imageList: any = await fs.promises.readdir(path.join(process.cwd(), 'public', 'assets'))
    console.log(imageList);

    return NextResponse.json({ Message: imageList, status: 201 });


  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 })
  }
}