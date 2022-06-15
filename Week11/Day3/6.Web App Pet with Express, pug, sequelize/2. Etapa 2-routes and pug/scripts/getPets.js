const { Pet } = require('../models');
async function getAllPets(){
    const pets = await Pet.findAll({
        attributes: ["name", "age"],
        order: [["age", "DESC"], ["name"]]
    });

    //console.log(pets);
    await pets.forEach (pet => console.log(pet.dataValues.name, pet.dataValues.age));
    

}


getAllPets();