'use server';

// CURD Operations for model AppliedForms

// import { PrismaClient } from '@prisma/client';

// const db = new PrismaClient();

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