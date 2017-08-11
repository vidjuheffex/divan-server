'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    'User',
    {
      username: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      hash: {
        allowNull: false,
        type: DataTypes.STRING
      },
      salt: {
        allowNull: false,
        type: DataTypes.STRING
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING
      }
    }, { });



  
  return User;
};
