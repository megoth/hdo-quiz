var Swing = require('swing');

function GameController() {
  var vm = this;
  vm.addCard = addCard;
  vm.swipeLeft = swipeLeft;
  vm.swipeRight = swipeRight;

  activate();

  function activate() {
    vm.promises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

module.exports = GameController;