import Game from './game.class';
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
    vm.game = new Game(vm.parties, vm.promises);
    vm.stack = Swing.Stack();
  }

  function addCard(cardElement) {
    vm.stack.createCard(cardElement);
  }

  function swipeLeft() {
    vm.game.giveAnswer(0);
  }

  function swipeRight() {
    vm.game.giveAnswer(1);
  }
}