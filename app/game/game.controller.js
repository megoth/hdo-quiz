import Game from './game.class';
const Swing = require('swing');

GameController.$inject = ['promiseService', 'partyService'];
export default function GameController(promiseService, partyService) {
  var vm = this;
  vm.addCard = addCard;
  vm.giveAnswer = giveAnswer;
  vm.isCurrent = isCurrent;
  vm.isFinished = isFinished;
  vm.swipeLeft = swipeLeft;
  vm.swipeRight = swipeRight;

  activate();

  function activate() {
    vm.parties = partyService.getParties();
    vm.promises = promiseService.getPromises(1);
    vm.game = new Game(vm.parties, vm.promises);
    vm.stack = Swing.Stack();
    vm.getScore = vm.game.getScore.bind(vm.game);
  }

  function addCard(cardElement) {
    vm.stack.createCard(cardElement);
  }

  function giveAnswer(partyIndex) {
    vm.game.giveAnswer(partyIndex);
  }

  function isCurrent(index) {
    return vm.game.currentPromise === index;
  }

  function isFinished() {
    return vm.game.currentPromise >= vm.promises.length;
  }

  function swipeLeft() {
    vm.game.giveAnswer(0);
  }

  function swipeRight() {
    vm.game.giveAnswer(1);
  }
}