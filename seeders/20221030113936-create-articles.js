'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('articles', [{
        id_articles: 1,
        name: "Breaking Bad",
        summary: "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
        date: "2008-01-20",
        // movieIdMovies: null,
        // seriesIdSeries:1,
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" 
      },
    {
      id_articles: 2,
      name: "Terrifier 2",
      summary: "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      date:"2022-10-06",
      // movieIdMovies: 1,
      // seriesIdSeries:null,
      createdAt:"2022-01-11",
      updatedAt:"2022-01-11",
      poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y5Z0WesTjvn59jP6yo459eUsbli.jpg"

    },
  {
    id_articles: 3,
    name: "Black Adam",
    summary: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    date:"2022-10-19",
    // movieIdMovies: 2,
    // seriesIdSeries:null,
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
  },{
    id_articles: 4,
    name: "House of the Dragon",
    summary: "The Targaryen dynasty is at the absolute apex of its power, with more than 15 dragons under their yoke. Most empires crumble from such heights. In the case of the Targaryens, their slow fall begins when King Viserys breaks with a century of tradition by naming his daughter Rhaenyra heir to the Iron Throne. But when Viserys later fathers a son, the court is shocked when Rhaenyra retains her status as his heir, and seeds of division sow friction across the realm.",
    date:"2022-09-01",
    // movieIdMovies: 2,
    // seriesIdSeries:null,
    createdAt:"2022-01-11",
    updatedAt:"2022-01-11",
    poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg"
  }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
