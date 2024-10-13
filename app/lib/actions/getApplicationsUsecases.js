// CURD

const { default: db } = require("../db");

const getApplications = async () => {
  const applications = await db.AppliedForms.find();
  return applications;
}
