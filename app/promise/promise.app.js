import promiseService from './promise.service';

export default angular.module('promise', [])
  .service('promiseService', promiseService)
  .name;