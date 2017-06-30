'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // remove the column
    queryInterface.removeColumn('Users','name')
    queryInterface.removeColumn('Users','email')
  },

  down: function (queryInterface, Sequelize) {
    // add the column
    queryInterface.addColumn('Users','name',{
      type: Sequelize.STRING
    })
    queryInterface.addColumn('Users','email',{
      type:Sequelize.STRING
    })

  }
};
