"use server";

import db from '@/app/lib/db.js';

export const getNocTypes = async () => {
  try {

    const nOCtypes = await db.nOCtypes.findMany();
    return nOCtypes;

  } catch (error) {
    console.error("GetNOCtypes", error);
    return [];
  }
}

export const getNOCtypesCount = async () => {
  return await db.nOCtypes.count();
}

export const getNOCtype = async (id) => {
  try {

    const nOCtype = await db.nOCtypes.findOne({
      where: { id }
    });
    return nOCtype;

  } catch (error) {
    console.error("GetNOCtype", error);
    return null;
  }
}

export const createNOCtype = async (title, description, hyperlink) => {
  try {

    const createdNOCtype = await db.nOCtypes.create({
      data: {
        title,
        description,
        hyperlink
      }
    });
    return createdNOCtype;

  } catch (error) {
    console.error("CreateNOCtype", error);
    return { error , message: "Failed to create noc type" };
  }
}

export const updateNOCtype = async (id, title, description, hyperlink) => {
  try {

    const updatedNOCtype = await db.nOCtypes.update({
      where: { id },
      data: {
        title,
        description,
        hyperlink
      }
    });
    return updatedNOCtype;

  } catch (error) {
    console.error("UpdateNOCtype", error);
    return { error , message: "Failed to update noc type" };
  }
}

export const deleteNOCtype = async (id) => {
  try {

    const deletedNOCtype = await db.nOCtypes.delete({
      where: { id }
    });
    return deletedNOCtype;

  } catch (error) {
    console.error("DeleteNOCtype", error);
    return { error , message: "Failed to delete noc type" };
  }
}