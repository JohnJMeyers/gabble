'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    queryInterface.removeColumn('Users','likes')
    queryInterface.removeColumn('Users','messages')
  },

  down: function (queryInterface, Sequelize) {

    queryInterface.addColumn('Users','likes',{
      type: Sequelize.ARRAY(Sequelize.STRING)
    })
    queryInterface.addColumn('Users','messages',{
      type:Sequelize.TEXT
    })
  }
};
