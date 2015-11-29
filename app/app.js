'use strict';

import angular from 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import './lib/ionic/js/ionic.js';
import './lib/ionic/js/ionic-angular.js';

import './style/app.scss';

import statesConfig from './states.config';
import ionicConfig from './ionic.config';
import hdoCard from './directives/card.directive';
import partyService from './party/party.service';
import promiseService from './promise/promise.service';

export default angular.module('hdoQuiz', ['ionic', uiRouter])
  .config(statesConfig)
  .run(ionicConfig)
  .directive('hdoCard', hdoCard)
  .service('partyService', partyService)
  .service('promiseService', promiseService);