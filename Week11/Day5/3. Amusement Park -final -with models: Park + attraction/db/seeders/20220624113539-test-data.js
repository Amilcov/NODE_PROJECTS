'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     return await queryInterface.bulkInsert('Parks', [
      { parkName: 'Central Park', 
        city: 'Manhattan', 
        provinceState: 'NY', 
        country: 'USA', 
        opened: new Date(1858, 6, 20), 
        size: '3.41 sqm', 
        description: 'Biggest Park of NY', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      },
     { parkName: 'Parcul Circului', 
        city: 'Bucharest', 
        provinceState: 'Sector2', 
        country: 'Romania', 
        opened: new Date(1961, 3, 18), 
        size: '2600 sqm', 
        description: 'Park with a beautiful lake in the middle  where there are rare egiptian flowers', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
      { parkName: 'Disneyland Park', 
        city: 'Anaheim', 
        provinceState: 'California', 
        country: 'USA', 
        opened: new Date(1955, 7, 17), 
        size: '468 acres', 
        description: 'It is the only one designed and built under the direct supervision of Walt Disney.', 
        createdAt: new Date(), 
        updatedAt: new Date() 
      }, 
  ]
      )},

  async down (queryInterface, Sequelize) {
   return await queryInterface.bulkDelete('Parks', {});
  }
};

