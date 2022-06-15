const { Pet, Owner} = require('../models/index');

async function insertPetOwner() {
    try{
      const owner = await Owner.create({
        "firstName": "Robinson",
        "lastName": "Crusoe"
      });

      const pet = await Pet.create({
        "name": "Friday2",
        "petTypeId": 1,
        "age": 12
      })


     await owner.addPet(pet);
     // or await pet.addOwner(owner);

 } catch(err) {
     console.log('Error on insertPetOwner', err)
 }

}

insertPetOwner();