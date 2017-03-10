angular.module('app')
  .controller('DocController', DocController);

DocController.$inject = [];

function DocController() {
  var vm = this;
  vm.test = 'TEST';
}
