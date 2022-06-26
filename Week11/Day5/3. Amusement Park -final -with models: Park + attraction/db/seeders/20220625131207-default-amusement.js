'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Attractions',[
     {
      attractionName: 'Pirates of the Caribbean',
      parkId: 3,
      theme: 'Pirates',
      opened: new Date('1967-03-18'),
      ridersPerVehicle: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 
    {
      attractionName: 'Indiana Jones Adventure',
      parkId: 3,
      theme: 'Indiana Jones',
      opened: new Date('1995-03-04'),
      ridersPerVehicle: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, 

     {
      attractionName: 'Space Mountain',
      parkId: 3,
      theme: 'Space',
      opened: new Date('1975-01-15'),
      ridersPerVehicle: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      attractionName: 'Matterhorn Bobsleds',
      parkId: 3,
      theme: 'Mountain',
      opened: new Date('1959-06-04'),
      ridersPerVehicle: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      attractionName: 'Grizzly River Run',
      parkId: 3,
      theme: 'River Rafting',
      opened: new Date('2001-02-08'),
      ridersPerVehicle: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
}
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Attractions', {
      attractionName: ['Pirates of the Caribben', 'Indiana Jones Adventure', 'Space Mountain', 'Matterhorn Bobsleds', 'Grizzly River Run']
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
};
