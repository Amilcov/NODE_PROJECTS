const { Pet } = require('../models');

async function getPet(id) {
   const pet = await Pet.findByPk(id);
   console.log(pet);
};

getPet(1);