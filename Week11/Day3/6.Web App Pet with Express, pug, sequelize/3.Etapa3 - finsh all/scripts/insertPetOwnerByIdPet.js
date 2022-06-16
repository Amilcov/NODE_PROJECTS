const { Owner } = require('../models');

async function insertPetOwnerByIdPet(petId){
   const owner = await Owner.create(
    {
      firstName: "Mike",
      lastName: "Jackson"
    });

    await owner.addPet(petId);
}

insertPetOwnerByIdPet(1);