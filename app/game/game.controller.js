const Swing = require('swing');

GameController.$inject = ['promiseService', 'partyService'];
export default function GameController(promiseService, partyService) {
  var vm = this;
  vm.addCard = addCard;
  vm.swipeLeft = swipeLeft;
  vm.swipeRight = swipeRight;

  activate();

  function activate() {
    vm.parties = partyService.getParties();
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