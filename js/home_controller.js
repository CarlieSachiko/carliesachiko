angular.module('app')
  .controller('HomeController', HomeController);

HomeController.$inject = [];

function HomeController() {
  var vm = this;
  vm.test = 'TEST';
}
