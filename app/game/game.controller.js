import Game from './game.class';
const Swing = require('swing');

GameController.$inject = ['promiseService', 'partyService', 'eventsService'];
export default function GameController(promiseService, partyService, eventsService) {
  var vm = this;
  vm.addCard = addCard;
  vm.getResponse = getResponse;
  vm.giveAnswer = giveAnswer;
  vm.isCurrent = isCurrent;
  vm.isFinished = isFinished;
  vm.swipeLeft = swipeLeft;
  vm.swipeRight = swipeRight;

  activate();

  function activate() {
    vm.parties = partyService.getParties();
    vm.promises = promiseService.getPromises();
    vm.game = new Game(vm.parties, vm.promises);
    vm.game.onNext((index) => eventsService.emit('title', index < vm.promises.length ? 
      `${index+1} av ${vm.promises.length}` :
      'Ferdig!'
    ));
    vm.game.onResponse((data) => {
      vm.respondedCorrect = data[0];
      vm.correctAnswer = data[1];
    });
    vm.stack = Swing.Stack();
    vm.getScore = vm.game.getScore.bind(vm.game);
  }

  function addCard(cardElement) {
    vm.stack.createCard(cardElement);
  }

  function getResponse(promiseIndex) {
    var party = vm.game.getResponse(promiseIndex);
    return party ? party.getName() : '';
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