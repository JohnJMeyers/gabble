'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    //name: DataTypes.STRING,
    //email: DataTypes.STRING,
    //likes: DataTypes.ARRAY(DataTypes.STRING),
    //messages: DataTypes.TEXT,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
