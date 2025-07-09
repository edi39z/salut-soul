import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clean up existing data
  await prisma.brosur.deleteMany({});

  // Create a sample brochure
  await prisma.brosur.create({
    data: {
      imageUrl: 'https://res.cloudinary.com/dutynt79z/image/upload/salut-soul/brosur/placeholder_brosur.png',
      linkUrl: 'https://www.ut.ac.id/',
      aktif: true,
    },
  });

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
