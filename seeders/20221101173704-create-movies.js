'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('movies', [
        {
        articleIdArticles: 1,
        id_movies: 1,
        title: "Terrifier 2",
        genre:"Horror",
        summary: "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        date:"2022-10-06",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
        duration:132,
        rank:7.3,
        is_on_cinema:true
  
      },
      {
        articleIdArticles: 2,
        id_movies: 2,
        title: "Black Adam",
        genre:"Action",
        summary: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        date:"2022-10-19",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        duration:125,
        rank:7,
        is_on_cinema:true
      },
      {
        articleIdArticles: 3,
        id_movies: 3,
        title: "Jeepers Creepers: Reborn",
        genre:"Horror",        
        summary: "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
        date:"2022-10-19",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
        duration:95,
        rank:5.8,
        is_on_cinema:true
      },

      {
        articleIdArticles: 7,
        id_movies: 4,
        title: "Orphan: First Kill",
        genre:"Horror",
        summary: "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
        date:"2022-07-27",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
        duration:99,
        rank:6.8,
        is_on_cinema:true
      },
      {
        articleIdArticles: 8,
        id_movies: 5,
        title: "Hocus Pocus 2",
        genre:"Adventure",
        summary: "It's been 29 years since someone lit the Black Flame Candle and resurrected the 17th-century sisters, and they are looking for revenge. Now it's up to three high-school students to stop the ravenous witches from wreaking a new kind of havoc on Salem before dawn on All Hallow's Eve.",
        date:"2022-09-27",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7ze7YNmUaX81ufctGqt0AgHxRtL.jpg",
        duration:103,
        rank:7.6,
        is_on_cinema:true
      },
      {
        articleIdArticles: 11,
        id_movies: 6,
        title: "Mission: Impossible - Rogue Nation",
        genre:"Action",
        summary: "Ethan and team take on their most impossible mission yet—eradicating 'The Syndicate', an International and highly-skilled rogue organisation committed to destroying the IMF.",
        date:"2015-07-23",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mXwC63mlpijqllhoeGnKBGgPtBa.jpg",
        duration:131,
        rank:7.2,
        is_on_cinema:false
      },
      {
        articleIdArticles: 12,
        id_movies: 7,
        title: "Project Almanac",
        genre:"Science fiction",
        summary: "A group of teens discover secret plans of a time machine, and construct one. However, things start to get out of control.",
        date:"2015-01-28",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/druhu1nf5Ad005hw9np1C2YrXHq.jpg",
        duration:106,
        rank:6.7,
        is_on_cinema:false
      },
      {
        articleIdArticles: 13,
        id_movies: 8,
        title: "Containment",
        genre:"Science fiction",
        summary: "Neighbors in a block wake one morning to find they have been sealed inside their apartments. Can they work together to find out why? Or will they destroy each other in their fight to escape?",
        date:"2015-07-09",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jMyudM6LM9VfIsR8ZRghlSpAdfv.jpg",
        duration:98,
        rank:5.9,
        is_on_cinema:false
      },
      {
        articleIdArticles: 17,
        id_movies: 9,
        title: "The Suicide Squad",
        genre:"Action",
        summary: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        date:"2021-07-28",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg",
        duration:132,
        rank:7.6,
        is_on_cinema:false
      },
      {
        articleIdArticles: 18,
        id_movies: 10,
        title: "The Woman King",
        genre:"Historical fiction",
        summary: "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
        date:"2022-09-15",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
        duration:132,
        rank:7.4,
        is_on_cinema:false
      },
      {
        articleIdArticles: 19,
        id_movies: 11,
        title: "Luca",
        genre:"Animation",
        summary: "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.",
        date:"2021-06-17",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tABCBpzu3mZbzMB3sRzMEHEvJi.jpg",
        duration:95,
        rank:7.9,
        is_on_cinema:false
      },
      {
        articleIdArticles: 20,
        id_movies: 12,
        title: "Smile",
        genre:"Horror",
        summary: "After witnessing a bizarre, traumatic incident involving a patient, Dr. Rose Cotter starts experiencing frightening occurrences that she can't explain. As an overwhelming terror begins taking over her life, Rose must confront her troubling past in order to survive and escape her horrifying new reality.",
        date:"2022-09-23",   
        createdAt:"2022-01-11",
        updatedAt:"2022-01-11",
        poster:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg",
        duration:115,
        rank:6.7,
        is_on_cinema:true
      },
    ], {});
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
