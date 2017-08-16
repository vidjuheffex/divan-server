'use strict';
module.exports = function(sequelize, DataTypes) {
  var Setting = sequelize.define('Setting', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data: {
        type: DataTypes.JSON,
        allowNull: false
      }
  });
  return Setting;
};
