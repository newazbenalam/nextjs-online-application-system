"use server";

import db from '@/app/lib/db.js';

// server actions
// CURD

export const GetNotices = async () => {
  try {

    const notices = await db.Notices.findMany();
    return notices;

  } catch (error) {
    console.error("GetNotices", error);
    return [];
  }
}

export const GetNotice = async (id) => {
  try {

    const notice = await db.Notices.findOne({
      where: { id }
    });
    return notice;

  } catch (error) {
    console.error("GetNotice", error);
    return null;
  }
}

export const CreateNotice = async (title, description, hyperlink) => {
  try {

    const createdNotice = await db.Notices.create({
      data: {
        title,
        description ,
        hyperlink
      }
    });
    return createdNotice;

  } catch (error) {
    console.error("CreateNotice", error);
    return { error , message: "Failed to create notice" };
  }
}

export const UpdateNotice = async (id, notice) => {
  try {

    const updatedNotice = await db.Notices.update({
      where: { id },
      data: notice
    });
    return updatedNotice;

  } catch (error) {
    console.error("UpdateNotice", error);
    return null;
  }
}


export const DeleteNotice = async (id) => {
  try {

    const deletedNotice = await db.Notices.delete({
      where: { id }
    });
    return deletedNotice;

  } catch (error) {
    console.error("DeleteNotice", error);
    return null;
  }
}