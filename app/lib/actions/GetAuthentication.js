"use server";

import db from "@/app/lib/db.js";

export const GetAuth = async (username, password) => {
  try {
    const users = await db.Users.findFirst({
      where: {
        OR: [
          {
            email: username,
          },
          {
            username: username,
          },
        ],
        // password: password,
      },
    });

    (res = user), { error: users ? "Success" : "Wrong Credentials" };
    return res;
  } catch (error) {
    console.error("GetAuth", error);
    return { error: "Wrong Credentials" };
  }
};
