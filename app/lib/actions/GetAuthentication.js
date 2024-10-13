"use server";

import db from "@/app/lib/db.js";
import { Role } from "@prisma/client";

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

    const res = { users ,error: users ? "Success" : "Wrong Credentials" };
    return res;
  } catch (error) {
    console.error("GetAuth", error);
    return { error: "Wrong Credentials" };
  }
};


export const getLogout = async () => {
  try {
    return { error: "Success" , status: 200};
  } catch (error) {
    console.error("getLogout", error);
    return { error: "Error" };
  }
};

export const createUser = async (data) => {
  try {
    const createdUser = await db.Users.create({
      data: {
        email: data.email,
        username: data.email,
        password: data.password,
        name: data.name,
        mobile: data.mobile,
        role: 'user',
      },
    });
    return createdUser;
  } catch (error) {
    console.error("CreateUser", error);
    return { error, message: "Failed to create user" };
  }
}