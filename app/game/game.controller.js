const Swing = require('swing');

GameController.$inject = ['promiseService'];
export default function GameController(promiseService) {
  var vm = this;
  vm.addCard = addCard;
  vm.swipeLeft = swipeLeft;
  vm.swipeRight = swipeRight;

  activate();

  function activate() {
    vm.promises = promiseService.getPromises();
    vm.currentPromise = 0;
    vm.stack = Swing.Stack();
  }

  function addCard(cardElement) {
    vm.stack.createCard(cardElement);
  }

  function swipeLeft() {
    vm.currentPromise++;
  }

  function swipeRight() {
    vm.currentPromise++;
  }
}