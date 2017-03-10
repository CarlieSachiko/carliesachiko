angular.module('app')
  .controller('ContactController', ContactController);

ContactController.$inject = ['$http'];

function ContactController($http) {
  var vm = this;
  vm.test = "Test";
}
