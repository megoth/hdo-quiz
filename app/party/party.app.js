import partyService from './party.service';

export default angular.module('party', [])
  .service('partyService', partyService)
  .name;