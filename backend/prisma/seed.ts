import { PrismaClient } from '@prisma/client';

import { airports } from '../airports';

const prisma = new PrismaClient();

async function main() {
  airports.map(async (airport) => {
    await prisma.airport.create({
      data: airport,
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
