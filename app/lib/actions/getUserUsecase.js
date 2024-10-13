"use server";

import db from "@/app/lib/db.js";

export const GetUsers = async () => {
  try {
    const users = await db.Users.findMany({
      // descending order by account creation date
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.error("GetUsers", error);
    return [];
  }
};
