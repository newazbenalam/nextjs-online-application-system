"use server";

import db from '@/app/lib/db.js';

export const GetNotices = async () => {
  try {

    const notices = await db.Notices.findMany();
    return notices;

  } catch (error) {
    console.error("GetNotices", error);
    return [];
  }
}
