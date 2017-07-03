'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gab = sequelize.define('Gab', {
    likes: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
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
        models.Gab.belongsTo(models.User)
      }
    }
  });
  return Gab;
};
