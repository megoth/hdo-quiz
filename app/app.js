require('ionic');
require('angular-ui-router');

require('./style/app.scss');

angular.module('hdoQuiz', ['ionic', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        template: require('./root/root.view.html'),
        controller: require('./root/root.controller'),
        controllerAs: 'root'
      })
      .state('root.start', {
        url: '/start',
        template: require('./start/start.view.html'),
        controller: require('./start/start.controller'),
        controllerAs: 'start',
        data: {
          title: 'Start'
        }
      })
      .state('root.game', {
        url: '/game',
        template: require('./game/game.view.html'),
        controller: require('./game/game.controller'),
        controllerAs: 'game',
        data: {
          title: 'Spill'
        }
      })
      .state('root.settings', {
        url: '/settings',
        template: require('./settings/settings.view.html'),
        controller: require('./settings/settings.controller'),
        controllerAs: 'settings',
        data: {
          title: 'Innstillinger'
        }
      });
    $urlRouterProvider.otherwise('/start');
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .directive('hdoCard', require('./directives/card.directive'));