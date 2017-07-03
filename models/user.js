'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,

    //name: DataTypes.STRING,
    //email: DataTypes.STRING,
    //likes: DataTypes.ARRAY(DataTypes.STRING),
    //messages: DataTypes.TEXT,
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 20],
          msg: "Sorry, your password must be 6 to 20 characters long."
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.User.hasMany(models.Gab)
      }
    }
  });
  return User;
};
