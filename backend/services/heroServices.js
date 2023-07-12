
const {getAllHeros, getHeroById, getHeroByName, createHero, updateHero, deleteHero}  = require ('../repository/prismaRepository');


module.exports = {

       
    getAll : async function (){
    return await getAllHeros();
  },
  
  getOneById : async function(id){
    return await getHeroById(id);
  },

  
  getOneByName : async function(name){
    return await getHeroByName(name);
  },
  
  createOne : async function(name){
    
    return await createHero(
      name
    );
  },
  
  updateOne : async function(id, name){
    return await updateHero(
      id,
      {
        name
      }
    )
  },
  
  deleteOne : async function(id){
    return await deleteHero(id);
  },
  
}