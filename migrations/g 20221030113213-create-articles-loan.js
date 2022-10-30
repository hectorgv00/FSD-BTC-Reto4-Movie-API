'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('articles_loans', {
      id_articles_loan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_articles: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id_articles'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      id_loan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'loans',
          key: 'id_loan'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('articles_loans');
  }
};