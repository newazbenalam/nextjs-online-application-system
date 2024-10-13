"use server";

import db from '@/app/lib/db.js';

// find single image by title
export const getImage = async (title) => {
  try {

    const image = await db.Images.findFirst({
      where: {
        title: title,
      },
    })
    console.log("getImage", image);
    return image;

  } catch (error) {
    console.error("GetImage", error);
    return null;
  }
}