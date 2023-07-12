const express = require('express')
const app = express()

const { getAll, getOneById, getOneByName, createOne, updateOne, deleteOne } = require("./services/ticketsServices");


app.use(express.json());


app.post("/create_ticket", (req, res) => {
  const newtickets =[];
  const { ticket } = req.body;
  console.log(req.body);
  newtickets.push({ name : ticket.name, description : ticket.description, etat : ticket.etat});

  console.log(ticket);
  console.log("------------------------");
  console.log(newtickets);

  res.json({createStat : true, status : "Ca marche"});
})

app.get("/api/heroes", async (req, res) => {
    try {
        const heroes = await getAll();
        res.json({ heroes })
      } catch (error) {
        console.log(error);
        res.status(500).send('Error getting Heroes');
      }
})

app.get("/api/heroes", async (req, res) => {
    try {
        const heroes = await getAll();
        res.json({ heroes })
      } catch (error) {
        console.log(error);
        res.status(500).send('Error getting Heroes');
      }
})

app.get("/api/heroes/{id}", async (req, res) => {
    const idHeroes = req.params
    try {
        const heroes = await getOneById(idHeroes);
        res.json({ heroes })
      } catch (error) {
        console.log(error);
        res.status(500).send('Error getting Heroes');
      }
})


app.post("/api/heroes/{name}", async (req, res) => {
    const { hero } = req.params;
    
    try {
        const newHeroes = await getOneByName(Heroes);
      } catch (error) {
        console.log(error);
        res.status(500).send('Error getting Heroes');
      }

  
    console.log(hero);
    console.log("------------------------");
    console.log(Heroes);
  
    res.json({createStat : true, status : "Ca marche"});

})

app.put("/api/heroes", async (req, res) => {
    const Heroes =[];
    const Heroesid = 0;
    const { hero } = req.body;
    console.log(req.body);
    
    
    Heroesid.push({ id : hero.id });
    Heroes.push({ name : hero.name });
    
    try {
        const updateHeroes = await updateOne(Heroesid, Heroes);
      } catch (error) {
        console.log(error);
        res.status(500).send('Error getting Heroes');
      }

  
    console.log(hero);
    console.log("------------------------");
    console.log(Heroes);
  
    res.json({createStat : true, status : "Ca marche"});

})

app.delete("/api/heroes", async (req, res) => {
    const Heroes =[];
    const { hero } = req.body;
    console.log(req.body);
    Heroes.push({ id : hero.id });
    
    try {
        const deleteHeroes = await deleteOne(Heroes);
      } catch (error) {
        console.log(error);
        res.status(500).send('Error getting Heroes');
      }

  
    console.log(hero);
    console.log("------------------------");
    console.log(Heroes);
  
    res.json({createStat : true, status : "Ca marche"});

})


app.listen(5000, () => {console.log("Server start on port 5000") });
