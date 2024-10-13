// CURD operations

'use server';

import db from '@/app/lib/db.js';

export const getPayments = async () => {
  try {

    const payments = await db.paymentInfo.findMany({
      include: {
        AppliedForms: {
          include: {
            orgNOCInfo: true,
            users: true,
            notices: true
          }
        },
        orgNOCInfo: true,
        users: true
      }
    });
    return payments;

  } catch (error) {
    console.error("GetPayments", error);
    return [];
  }
}


export const getPayment = async (id) => {
  try {

    const payment = await db.paymentInfo.findOne({
      where: { id },
      include: {
        AppliedForms: true,
        orgNOCInfo: true,
        users: true
      }
    });
    return payment;

  } catch (error) {
    console.error("GetPayment", error);
    return null;
  }
}

export const createPayment = async (paymentType, paymentAmount, paymentDate, paymentFile) => {
  try {

    const createdPayment = await db.paymentInfo.create({
      data: {
        paymentType,
        paymentAmount,
        paymentDate,
        paymentFile
      }
    });
    return createdPayment;

  } catch (error) {
    console.error("CreatePayment", error);
    return { error , message: "Failed to create payment" };
  }
}


export const updatePayment = async (id, paymentType, paymentAmount, paymentDate, paymentFile) => {
  try {

    const updatedPayment = await db.paymentInfo.update({
      where: { id },
      data: {
        paymentType,
        paymentAmount,
        paymentDate,
        paymentFile
      }
    });
    return updatedPayment;

  } catch (error) {
    console.error("UpdatePayment", error);
    return { error , message: "Failed to update payment" };
  }
}

export const deletePayment = async (id) => {
  try {

    const deletedPayment = await db.paymentInfo.delete({
      where: { id }
    });
    return deletedPayment;

  } catch (error) {
    console.error("DeletePayment", error);
    return { error , message: "Failed to delete payment" };
  }
}

