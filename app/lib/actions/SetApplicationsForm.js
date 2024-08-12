"use server";

import db from "@/app/lib/db.js";

export const SetApplicationPersonalData = async (formData) => {
  try {
    const name = formData.applicantName;
    const phone = formData.applicantPhone;
    const email = formData.email;
    const address = formData.address;
    const orgName = formData.orgName;
    const orgAddress = formData.orgAddress;
    const orgMobile = formData.orgMobile;
    const orgEmail = formData.orgEmail;
    const expirationDate = formData.expirationDate;
    const nocTypeID = formData.nocTypeID === "null" ? null : formData.nocTypeID || null;
    const nocType = formData.nocType;
    const patmentType = formData.paymentType || null;

    console.log(name, phone, email, address, orgName, orgAddress, orgMobile, orgEmail, expirationDate, nocTypeID, nocType);

    /* 
    model Users {
  id       Int    @id @default(autoincrement()) 
  name     String @db.VarChar(50)
  email    String @db.VarChar(35)
  mobile   String @db.VarChar(15)
  username String @db.VarChar(50)
  password String @db.VarChar(50)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt @default(now())
}

model Notices {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(100)
  description String   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())

  applicationForms ApplicationForms? @relation(fields: [applicationFormsId], references: [id])
  applicationFormsId Int?
}


model ApplicationForms {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(100)
  description String   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())

  subForm     SubForms? @relation(fields: [subFormId], references: [id])
  subFormId   Int?

  notices     Notices[]

}

model SubForms {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(100)
  description String   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())

  applicationForms ApplicationForms[]
}


model NOCtypes {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(100)
  description String   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())   

  orgNOCInfo OrgNOCInfo? @relation(fields: [orgNOCInfoId], references: [id])
  orgNOCInfoId Int?

}

model OrgNOCInfo {
  id          Int      @id @default(autoincrement())
  title       String?   @db.VarChar(100)
  description String?   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)

  nocTypesTitle String?   @db.VarChar(100)
  orgName String?   @db.VarChar(100)
  orgAddress String?   @db.VarChar(255)
  orgEmail String?   @db.VarChar(35)
  orgMobile String?   @db.VarChar(15)
  applicantName String?   @db.VarChar(50)
  applicantPhone String?   @db.VarChar(35)
  expirationDate DateTime?  @default(now())

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())

  nocTypes NOCtypes[]
  nocTypesId Int?

  // payment 
  orgPaymentInfo PaymentInfo? @relation(fields: [orgPaymentInfoId], references: [id])
  orgPaymentInfoId Int?

}

model PaymentInfo {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(100)
  description String   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)

  paymentType PaymentTypes? @relation(fields: [paymentTypesId], references: [id])
  paymentTypesId Int?

  paymentTypesTitle String?   @db.VarChar(100)
  vatAmount Float  @db.Float
  fees Float  @db.Float
  totalAmount Float  @db.Float

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())

  orgNOCInfo OrgNOCInfo[]
}

model PaymentTypes {
  id          Int      @id @default(autoincrement())
  title       String   @db.VarChar(100)
  description String   @db.VarChar(255)
  hyperlink   String?   @db.VarChar(100)
  
  imageLink String?   @db.VarChar(100)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt @default(now())

  paymentInfo PaymentInfo[]
}
    */
    
    const users = await db.Users.create({
      data: {
        name: name,
        email: email,
        mobile: phone,
        username: email,
        password: phone,
      },
    });

    const orgNOCInfo = await db.OrgNOCInfo.create({
      data: {
        title: nocType,
        nocTypesTitle: nocType +', '+ orgName,
        orgName: orgName,
        orgAddress: orgAddress,
        orgEmail: orgEmail,
        orgMobile: orgMobile,
        applicantName: name,
        applicantPhone: phone,
        // argument `expirationDate`: premature end of input. Expected ISO-8601 DateTime.
        // expirationDate TO DATETIME 
        expirationDate: new Date(expirationDate),

        // convert string to intger
        // nocTypes NOCtypes[]
        // nocTypesId Int?
        nocTypesId: parseInt(nocTypeID),
        nocTypes: {
          connect: {
            id: parseInt(nocTypeID),
          },
        },

        orgPaymentInfoId: patmentType
      },
    });

    console.log(users, orgNOCInfo);

    // console.log(email);
    // const users = await db.Users.findMany();
    const respone = { status: "success", message: "Data saved successfully" };
    return respone;
  } catch (error) {
    console.error("SetApplicationPersonalData", error);
    return [];
  }
};
