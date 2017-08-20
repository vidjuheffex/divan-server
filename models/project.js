'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fsname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hrez: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vrez: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fps: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  });

  Project.associate = function(models) {
    Project.belongsTo(models.User, {as: 'creator', foreignKey: 'creatorid'});
  };

  
  return Project;
};
