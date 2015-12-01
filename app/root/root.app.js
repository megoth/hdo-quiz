import events from '../events/events.app';

import root from './root.controller';

export default angular.module('root', [events])
  .controller('root', root)
  .name;