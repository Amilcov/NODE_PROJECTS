const {Pet} = require('../models/index');

async function insertPet() {
   await Pet.create({
    "name": "Giry",
    "petTypeId": 4,
    "age": 7
   });

   const pet = await Pet.build({
    "name": "Adventure",
    "petTypeId": 1,
    "age": 1
   });

   await pet.save();
}

insertPet();