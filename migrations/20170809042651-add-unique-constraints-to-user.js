'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.addConstraint('Users', ['username'], {
          type: 'unique',
          name: 'unique_username'
      });
    queryInterface.addConstraint('Users', ['email'], {
          type: 'unique',
          name: 'unique_email'
      });
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Users', 'unique_username');
    queryInterface.removeConstraint('Users', 'unique_email');
  }
};
