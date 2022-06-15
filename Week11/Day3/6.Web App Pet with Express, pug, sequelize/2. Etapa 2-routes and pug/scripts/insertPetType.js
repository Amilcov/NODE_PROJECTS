const { PetType } = require('../models/index')

async function insertPetType() {

  await PetType.create({
      "type": "giraffe"
   });
   
   const petType = await PetType.build({
     "type": "elephant"
   })
   await petType.save();
 }

 insertPetType();