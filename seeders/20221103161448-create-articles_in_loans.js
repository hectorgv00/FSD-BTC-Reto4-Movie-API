"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "articles_in_loans",
      [
        {
          loanIdLoan: 1,
          articleIdArticles: 1,
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11",
        },
        {
          loanIdLoan: 1,
          articleIdArticles: 8,
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11",
        },
        {
          loanIdLoan: 1,
          articleIdArticles: 4,
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11",
        },
        {
          loanIdLoan: 2,
          articleIdArticles: 1,
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11",
        },
        {
          loanIdLoan: 3,
          articleIdArticles: 7,
          createdAt: "2022-01-11",
          updatedAt: "2022-01-11",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
