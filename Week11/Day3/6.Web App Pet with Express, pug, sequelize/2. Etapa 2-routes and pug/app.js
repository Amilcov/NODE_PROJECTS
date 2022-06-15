const express = require('express');
const app = express();
const { Pet, Owner, PetType } = require('./models');

app.set('view engine', 'pug');
app.use(express.urlencoded({extended: true}));

app.get('/', (_, res) => res.redirect('/pets'))

app.get('/pets', async (req, res) => {
    const dataPage = {};

    const pets = await Pet.findAll({
        include: [Owner, PetType],
        order: ["name"]

    });
   

    const petTypes = await PetType.findAll({
        order: ["type"]
    })

    dataPage.pets = pets;
    dataPage.petTypes = petTypes;
    //res.send( dataPage.pets);
    //res.send( dataPage.petTypes);
    res.render('pets', dataPage)

})

app.get('/owners', async (req, res) => {
    const dataPage = {};

    const owners = await Owner.findAll({
        include: [Pet],
        order: ["firstName", "lastName"]
    })

    const pets = await Pet.findAll({
        include: [PetType],
        order: ["name"]
    })
    dataPage.owners = owners;
    dataPage.pets = pets;
    //res.send(dataPage.owners );
    res.render('owners', dataPage);

})

app.post('/pets', async (req, res) => {
   const {name, age, typeId} = req.body;
   const pet = Pet.create({
     name,
     age,
     petTypeId: typeId
   })
})

app.post('/owners',async (req, res) => {
   const {firstName, lastName, } = req.body;
   const owner = await Owner.create({
     firstName,
     lastName
   })
   await Pet.hasOwner(owner);

})


app.use(express.static('./assets'))

const port = 8081;

app.listen(port, () => console.log(`Server is listening on port ${port}...`))