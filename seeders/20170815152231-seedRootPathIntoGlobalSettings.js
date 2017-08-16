'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    let date = new Date();
    return queryInterface.bulkInsert('Settings', [{
      name: "Global_Settings",
      data: '{"rootProjectPath":"C:/Projects"}',
      createdAt: date,
      updatedAt: date
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Settings', null, {});
  }
};
