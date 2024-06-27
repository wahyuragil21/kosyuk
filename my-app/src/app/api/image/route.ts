export const dynamic = 'force-dynamic' // defaults to auto
import { pool } from "@/configDB/pg-config";

import { NextResponse } from "next/server";
import path from "path";
import { readFile } from 'fs/promises'
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer'
import { NextApiRequest } from "next";
import fs from 'fs';
import { writeFile } from 'fs/promises'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});




export async function POST(request: Request) {
  try {
    let formData = await request.formData() as any
    const file: any = formData.get("image");
    let type = file.type
    let buffer = Buffer.from(await file.arrayBuffer()).toString('base64')
    const dataURI = `data:${type};base64,${buffer}`

    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }


    const cloudinaryUploadResponse = cloudinary.uploader.upload(dataURI)

    const secure_url = (await cloudinaryUploadResponse).secure_url
    return NextResponse.json({ secure_url }, { status: 200 });

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