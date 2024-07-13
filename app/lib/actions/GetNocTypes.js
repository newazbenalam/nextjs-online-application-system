"use server";

import db from '@/app/lib/db.js';

export const GetNOCtypes = async () => {
  try {

    const nOCtypes = await db.NOCtypes.findMany();
    return nOCtypes;

  } catch (error) {
    console.error("GetNOCtypes", error);
    return [];
  }
}
