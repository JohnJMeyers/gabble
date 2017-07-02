'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gab = sequelize.define('Gab', {
    likes: DataTypes.INTEGER,
    messages: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: {
        msg: "Can't be empty"
      }
    }
  }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Gab;
};
