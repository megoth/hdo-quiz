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
import partyService from './party/party.service';

import game from './game/game.app';
import root from './root/root.app';

export default angular.module('hdoQuiz', ['ionic', uiRouter, game, root])
  .config(statesConfig)
  .run(ionicConfig);