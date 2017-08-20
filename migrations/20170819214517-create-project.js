'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fsname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hrez: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      vrez: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fps: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      creatorid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
              key: 'id',
              model: 'Users'
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Projects');
  }
};
