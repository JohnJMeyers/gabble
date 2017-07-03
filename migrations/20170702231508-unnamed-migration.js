'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Gabs','user_id',{
      type: Sequelize.STRING
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Gabs','user_id',{
    })
  }
};
