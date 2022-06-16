const { Pet} = require('../models');

async function insertPetOwnerByIdOwner(ownerId){
   const pet = await Pet.create(
    {
      name: "Zdreanta",
      petTypeId: 1,
      age: 2
    });

    await pet.addOwner(ownerId);
}

insertPetOwnerByIdOwner(2);