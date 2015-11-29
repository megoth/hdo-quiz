function GameController() {
  var vm = this;
  vm.swipeLeft = swipeLeft;
  vm.swipeRight = swipeRight;

  activate();

  function activate() {
    vm.direction = 'no swipe yet';
  }

  function swipeLeft() {
    vm.direction = 'left';
  }

  function swipeRight() {
    vm.direction = 'right';
  }
}

module.exports = GameController;