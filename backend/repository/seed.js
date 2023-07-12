const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {

  await prisma.hero.deleteMany();

  await prisma.hero.createMany({
    data: [
      {
        id: 1,
        name: 'Example Hero',

      },
      {
        id: 2,
        name: 'Example Hero 2',
      },
      {
        id: 3,
        name: 'Example Hero 3',
      },
      {
        id: 4,
        name: 'Example Hero 4',

      },
      {
        id: 5,
        name: 'Example Hero 5',

      },
    ],
  });

  const allHeros = await prisma.hero.findMany()
  console.log(allHeros)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



