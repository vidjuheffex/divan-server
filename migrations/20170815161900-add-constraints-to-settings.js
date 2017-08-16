'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addConstraint('Settings', ['name'], {
          type: 'unique',
          name: 'unique_name'
      });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Settings', 'unique_name');
  }
};
