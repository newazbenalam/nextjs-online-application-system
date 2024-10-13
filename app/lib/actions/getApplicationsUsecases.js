'use server';

// CURD Operations for model AppliedForms

import db from '@/app/lib/db.js';

export const getApplications = async () => {
  return await db.appliedForms.findMany({
    include: {
      users: true,
      notices: true,
      paymentInfo: true,
      orgNOCInfo: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export const getApplicationsCount = async (id) => {
  return await db.appliedForms.count();
}

export const getInvoicesCount = () => {
  return db.paymentInfo.count();
}

export const getApplicationsByUserId = async (userId) => {
  return await db.appliedForms.findMany({
    where: { userId },
    include: {
      users: true,
      notices: true,
      paymentInfo: true,
      orgNOCInfo: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export const getApplication = async (id) => {
  return await db.appliedForms.findUnique({
    where: { id },
    include: {
      users: true,
      notices: true,
      paymentInfo: true,
      orgNOCInfo: true,
    },
  });
}

export const createApplication = async (userId, orgNOCInfoId, noticeId, paymentInfoId, status, applicationFile) => {
  return await db.appliedForms.create({
    data: {
      userId,
      orgNOCInfoId,
      noticeId,
      paymentInfoId,
      status,
      applicationFile,
    },
  });
}


export const updateApplication = async (id, data) => {
  return await db.appliedForms.update({
    where: { id },
    data:  data,
  });
}


export const deleteApplication = async (id) => {
  return await db.appliedForms.delete({
    where: { id },
  });
}
