angular.module('app')
  .controller('WorkController', WorkController);

WorkController.$inject = [];

function WorkController() {
  var vm = this;

  vm.portfolio = [
    {
      title: "Rooted & Wild Co",
      image: "../images/rooted-and-wild.jpg",
      desc: "Rooted and Wild is, my dear friend, Mackenzie Myers's personal website featuring her floral designs. I designed it with her in mind, staying true to her aesthetic and feel. The main technologies used were Mongoose, ExpressJS, AngularJS, NodeJS, and Bootstrap.",
      github: "https://github.com/CarlieSachiko/rooted-and-wild-co",
      live: "https://rooted-and-wild.herokuapp.com/"
    },
    {
      title: "Travlr",
      image: "../images/travlr.jpg",
      desc: "This is a website I developed for the travel enthusiasts of the world, myself included. Here you can set up a profile, create a bucket list, and plan trips with friends. The primary technologies used were HTML, CSS, Bootstrap, and Ruby on Rails. Moving forward, among many things, I would like to implement an API so users can find their destinations faster and more efficiently.",
      github: "https://github.com/CarlieSachiko/travlr-app",
      live: "https://wdi-travlr-app.herokuapp.com/"
    },
    {
      title: "Food Fight",
      image: "../images/food-fight.jpg",
      desc: "The Food Fight app was a collaborative effort with three other individuals to solve the problem of being overloaded with options when searching for somewhere to eat. We utilized Yelp’s API to present restaurant options in a simplified way. My responsibilities were directed towards backend technologies. In the future we would like to work more on the responsive web design.",
      github: "https://github.com/CarlieSachiko/food-fight-project",
      live: "https://food-fight-app.herokuapp.com/"
    },
    {
      title: "Dots & Boxes",
      image: "../images/dots-and-boxes.jpg",
      desc: "This is a classic kids game, typically played with pen and paper where each player is competing to create the highest number of boxes using single lines on a grid. Much like the development process, it requires thinking ahead. I used JavaScript and jQuery for the game logic and HTML and CSS for the structure and styling.",
      github: "https://github.com/CarlieSachiko/dots-and-boxes",
      live: "https://carliesachiko.github.io/dots-and-boxes/index.html"
    },
    {
      title: "Tic Tac Toe",
      image: "../images/tic-tac-toe.jpg",
      desc: "One of the first things I created, this is a simple digitized tic-tac-toe. I used HTML5 and CSS3 for the structure and JavaScript for the game logic. While it is fairly responsive as is, I hope to make it more so in the future.",
      github: "https://github.com/CarlieSachiko/tic-tac-toe",
      live: "https://carliesachiko.github.io/tic-tac-toe/"
    }
  ];

}
