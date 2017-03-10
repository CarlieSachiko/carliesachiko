angular.module('app')
  .controller('AboutController', AboutController);

AboutController.$inject = [];

function AboutController() {
  var vm = this;
  vm.test = 'TEST';
}
