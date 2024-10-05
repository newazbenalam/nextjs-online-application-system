"use server";

import db from "@/app/lib/db.js";

export const SetApplicationPersonalData = async (formData, noticeId) => {
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
  fatherName String @db.VarChar(50) @default("N/A")
  motherName String @db.VarChar(50) @default("N/A")
  dob     DateTime @default(now()) 
  dobPlace String @db.VarChar(255)  @default("N/A")
  nid    String @db.VarChar(20)     @default("N/A")
  image String @db.VarChar(100)     @default("N/A")
  presentAddress String @db.VarChar(255)  @default("N/A")
  permanentAddress String @db.VarChar(255)  @default("N/A")
  active Boolean @default(true)
  role    String @db.VarChar(50) @default("user")

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

    var users = await db.Users.findFirst({
      where: {
        email: email
      },
    });

    if (!users) {

      users = await db.Users.create({
        data: {
          name: name,
          email: email,
          mobile: phone,
          username: email,
          password: phone,
          fatherName: formData.fatherName || "N/A",
          motherName: formData.motherName || "N/A",
          presentAddress: formData.address,
          permanentAddress: formData.parAddress,
          dob: new Date(formData.dob || '1917-01-01'),
          dobPlace: formData.dobPlace,
          nid: formData.nid,
          image: formData.image,
          role: formData.role || "user",
        },
      });
    }

    
    const varNoc = formData.nocTypeID;
    var includeNoc = {};
    if (varNoc) {
      includeNoc = {
        connect: {
          id: parseInt(varNoc),
        },
      };
    }
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
        nocTypes: includeNoc,

        orgPaymentInfoId: patmentType
      },
    });

    console.log(users, orgNOCInfo);

    // Filling up applied Forms

    // model AppliedForms {
    //   id          Int      @id @default(autoincrement())
    //   title       String   @db.VarChar(100) //Applied Form Title
    //   description String?   @db.VarChar(255)
    //   hyperlink   String?   @db.VarChar(100)
    //   createdAt   DateTime @default(now())
    //   updatedAt   DateTime @updatedAt @default(now())
    
    //   users Users? @relation(fields: [usersId], references: [id])
    //   usersId Int?
    
    //   notices Notices? @relation(fields: [noticesId], references: [id])
    //   noticesId Int?
    
    //   applicationForms ApplicationForms? @relation(fields: [applicationFormsId], references: [id])
    //   applicationFormsId Int?
    
    //   subForms SubForms? @relation(fields: [subFormsId], references: [id])
    //   subFormsId Int?
    
    //   orgNOCInfo OrgNOCInfo? @relation(fields: [orgNOCInfoId], references: [id])
    //   orgNOCInfoId Int?
    
    //   paymentInfo PaymentInfo? @relation(fields: [paymentInfoId], references: [id])
    //   paymentInfoId Int?
    // }

    const appliedId =  await AppliedFormFoo(noticeId, users, nocType, orgNOCInfo, patmentType);


    // console.log(email);
    // const users = await db.Users.findMany();
    const respone = { status: "success", message: "Data saved successfully", appliedId: appliedId };
    return respone;
  } catch (error) {
    console.error("SetApplicationPersonalData", error);
    return [];
  }
};


export const SetApplicationUserData = async (formData, noticeId) => {

  try {
    var user = await db.Users.findFirst({
      where: {
        email: formData.email
      },
    });

    if (!user) {

      user = await db.Users.create({
        data: {
          name: formData.applicantName,
          email: formData.email,
          mobile: formData.applicantPhone,
          username: formData.email,
          password: formData.applicantPhone,
          fatherName: formData.fatherName || "N/A",
          motherName: formData.motherName || "N/A",
          presentAddress: formData.currentAddress,
          permanentAddress: formData.parAddress,
          dob: new Date(formData.dob || '1917-01-01'),
          dobPlace: formData.dobPlace,
          nid: formData.nid,
          image: formData.image,
          role: formData.role || "user",
        },
      });
    }

    console.log(user);

    const appliedId =  await AppliedFormFoo(noticeId, user);
    
  
    const respone = { status: "success", message: "Data saved successfully", appliedId: appliedId };
    return respone;
  }
  catch (error) {
    console.error("SetApplicationUserData", error);
    return [];
  }
}

async function AppliedFormFoo(noticeId, users, nocType=null, orgNOCInfo=null, patmentType=null) {

  const notices = await db.Notices.findUnique({
    where: {
      id: parseInt(noticeId),
    },
  })

  console.log(notices);
  var appliedForms;

  if (orgNOCInfo) {
    appliedForms = await db.AppliedForms.create({
      data: {
        title: notices.title,
        description: nocType || "N/A",
        usersId: users.id,
        orgNOCInfoId: orgNOCInfo.id,
        // paymentInfoId: patmentType,
        noticesId: notices.id
      }
    });
  
  } else {
    appliedForms = await db.AppliedForms.create({
      data: {
        title: notices.title,
        description: nocType || "N/A",
        usersId: users.id,
        // paymentInfoId: patmentType,
        noticesId: notices.id
      }
    });
  }


  console.log(appliedForms);
  return appliedForms.id;
}


// get applied forms
export const GetAppliedForms = async () => {
  try {
    const appliedForms = await db.AppliedForms.findMany();
    return appliedForms;
  } catch (error) {
    console.error("GetAppliedForms", error);
    return [];
  }
}

// get applied form
export const GetAppliedForm = async (id) => {
  try {
    const appliedForm = await db.AppliedForms.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        users: true,
        notices: true,
        applicationForms: true,
        subForms: true,
        orgNOCInfo: true,
        paymentInfo: true,
      },
    });
    return appliedForm;
  } catch (error) {
    console.error("GetAppliedForm", error);
    return [];
  }
}

// update applied form
export const UpdateAppliedForm = async (id, data) => {
  try {
    const appliedForm = await db.AppliedForms.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
      },
    });
    return appliedForm;
  } catch (error) {
    console.error("UpdateAppliedForm", error);
    return [];
  }
}



// model PaymentInfo {
//   id          Int      @id @default(autoincrement())
//   title       String   @db.VarChar(100)
//   description String   @db.VarChar(255)
//   hyperlink   String?   @db.VarChar(100)

//   paymentType PaymentTypes? @relation(fields: [paymentTypesId], references: [id])
//   paymentTypesId Int?

//   paymentTypesTitle String?   @db.VarChar(100)
//   vatAmount Float  @db.Float
//   fees Float  @db.Float
//   totalAmount Float  @db.Float

//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt @default(now())

//   users Users? @relation(fields: [usersId], references: [id])
//   usersId Int?

//   orgNOCInfo OrgNOCInfo[]

//   AppliedForms AppliedForms[]
// }

// model PaymentTypes {
//   id          Int      @id @default(autoincrement())
//   title       String   @db.VarChar(100)
//   description String   @db.VarChar(255)
//   hyperlink   String?   @db.VarChar(100)
  
//   imageLink String?   @db.VarChar(100)

//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt @default(now())

//   paymentInfo PaymentInfo[]
// }

// create paymentInfo
export const CreatePaymentInfo = async (data) => {
  try {
    const paymentInfo = await db.PaymentInfo.create({
      data: {
        title: data.title,
        description: data.description || 'N/A',
        hyperlink: data.hyperlink || 'N/A',
        // paymentTypesId: data.paymentTypesId,
        // paymentTypesTitle: data.paymentTypesTitle,
        vatAmount: data.vatAmount,
        fees: data.fees,
        totalAmount: data.totalAmount,
      },
    });
    
    // bind with applied form's payment info
    const appliedForm = await db.AppliedForms.update({
      where: {
        id: parseInt(data.appliedId),
      },
      data: {
        paymentInfoId: paymentInfo.id,
      },
    });
    
    console.log(paymentInfo.id);

    return paymentInfo;
  } catch (error) {
    console.error("CreatePaymentInfo", error);
    return [];
  }
}
