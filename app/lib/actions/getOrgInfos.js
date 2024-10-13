// CURD operations
'use server';

import db from '@/app/lib/db.js';

export const getOrgInfos = async () => {
  try {

    const orgInfos = await db.OrgNOCInfo.findMany({
      include: {
        nocTypes: true,
        orgPaymentInfo: true,
        AppliedForms: true,
      }
    });
    return orgInfos;

  } catch (error) {
    console.error("GetOrgInfos", error);
    return [];
  }
}

export const getOrgInfo = async (id) => {
  try {

    const orgInfo = await db.orgNOCInfo.findOne({
      where: { id }
    });
    return orgInfo;

  } catch (error) {
    console.error("GetOrgInfo", error);
    return null;
  }
}

export const createOrgInfo = async (orgName, orgType, orgAddress, orgEmail, orgPhone, orgWebsite, orgNOCType, orgNOCNumber, orgNOCExpiry, orgNOCFile, orgPaymentInfo) => {
  try {

    const createdOrgInfo = await db.orgNOCInfo.create({
      data: {
        orgName,
        orgType,
        orgAddress,
        orgEmail,
        orgPhone,
        orgWebsite,
        orgNOCType,
        orgNOCNumber,
        orgNOCExpiry,
        orgNOCFile,
        orgPaymentInfo
      }
    });
    return createdOrgInfo;

  } catch (error) {
    console.error("CreateOrgInfo", error);
    return { error , message: "Failed to create org info" };
  }
}


export const UpdateOrgInfo = async (id, orgInfo) => {
  try {

    const updatedOrgInfo = await db.orgNOCInfo.update({
      where: { id },
      data: orgInfo
    });
    return updatedOrgInfo;
  } catch (error) {
    console.error("UpdateOrgInfo", error);
    return { error , message: "Failed to update org info" };
  }
}


export const deleteOrgInfo = async (id) => {
  try {

    const deletedOrgInfo = await db.orgNOCInfo.delete({
      where: { id }
    });
    return deletedOrgInfo;
  } catch (error) {
    console.error("DeleteOrgInfo", error);
    return { error , message: "Failed to delete org info" };
  }
}


export const getNocTypes = async () => {
  try {

    const nocTypes = await db.nOCtypes.findMany();
    return nocTypes;

  } catch (error) {
    console.error("GetNocTypes", error);
    return [];
  }
}