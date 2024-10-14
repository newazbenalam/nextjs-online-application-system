// make a single connection instance to the database which can be used in all the actions.

import { PrismaClient } from '@prisma/client';

const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = db; // Preserve the Prisma client in development mode
}

export default db;


// import { PrismaClient } from "@prisma/client";
// const db = new PrismaClient();
// export default db; 