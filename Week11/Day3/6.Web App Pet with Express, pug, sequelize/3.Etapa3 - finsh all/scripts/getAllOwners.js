const { Owner, Pet } = require('../models');

async function getAllOwners(){
  const owners = await Owner.findAll({
    include: [Pet],
    order: ["firstName", "lastName"]
  });


    console.log(owners);

}

getAllOwners();