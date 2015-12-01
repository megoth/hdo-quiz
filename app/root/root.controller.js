RootController.$inject = ['$ionicSideMenuDelegate', '$state', '$rootScope', 'eventsService'];
function RootController($ionicSideMenuDelegate, $state, $rootScope, eventsService) {
  var vm = this;
  vm.toggleMenu = toggleMenu;

  activate();

  function activate() {
    $ionicSideMenuDelegate.canDragContent(false);
    vm.title = $state.$current.data.title;
    eventsService.on('title', (title) => {
      vm.title = title;
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      $ionicSideMenuDelegate.toggleLeft(false);
      vm.title = toState.data.title;
    });
  }

  function toggleMenu() {
    $ionicSideMenuDelegate.toggleLeft();
  }
}

module.exports = RootController;