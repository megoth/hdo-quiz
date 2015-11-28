function RootController($ionicSideMenuDelegate, $state, $rootScope) {
  var vm = this;
  vm.toggleMenu = toggleMenu;

  activate();

  function activate() {
    $ionicSideMenuDelegate.canDragContent(false);
    vm.title = $state.$current.data.title;
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      $ionicSideMenuDelegate.toggleLeft();
      vm.title = toState.data.title;
    });
  }

  function toggleMenu() {
    $ionicSideMenuDelegate.toggleLeft();
  }
}

module.exports = RootController;