"use server";

import db from '@/app/lib/db.js';

export const GetNOCtypes = async () => {
  try {

    const nOCtypes = await db.nOCtypes.findMany();
    return nOCtypes;

  } catch (error) {
    console.error("GetNOCtypes", error);
    return [];
  }
}

export const GetNOCtypesCount = async () => {
  return await db.nOCtypes.count();
}
