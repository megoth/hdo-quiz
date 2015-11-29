import card from '../card/card.app';
import promise from '../promise/promise.app';

import GameController from './game.controller';

export default angular.module('game', [promise, card])
  .controller('game', GameController)
  .name;