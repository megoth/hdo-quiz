import eventsService from './events.service';

export default angular.module('events', [])
  .service('eventsService', eventsService)
  .name;