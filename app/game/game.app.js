import card from '../card/card.app';
import events from '../events/events.app';
import party from '../party/party.app';
import promise from '../promise/promise.app';

import GameController from './game.controller';

export default angular.module('game', [card, events, party, promise])
  .controller('game', GameController)
  .name;