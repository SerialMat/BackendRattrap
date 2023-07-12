const { PrismaClient } = require ("@prisma/client");

const prisma = new PrismaClient();

module.exports  = {

    getAllHeros : async function(){
        const Heros = await prisma.hero.findMany();
        console.log(Heros);
        return Heros;
    },

    getHeroById : async function(id) {
    return await prisma.hero.findUnique({
      where: { id }
    });
    },

    getHeroByName : async function(name) {
      return await prisma.hero.findUnique({
        where: { name }
      });
      },

    createHero : async function(data){
    return await prisma.hero.create({
      data: {
        name: data.name
      }
    });
    },

    updateHero : async function(id, data){
    return await prisma.hero.update({
      where: { id },
      data: {
        name: data.name
      }
    });
  },

  deleteHero : async function(id){
    return await prisma.hero.delete({
      where: { id }
    });
  },

  clearDatabase : async function(){
    await prisma.hero.deleteMany();
  },

  closeDatabase : async function(){
    await prisma.$disconnect();
  },
}




