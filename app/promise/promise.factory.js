'use strict';

import PartyPromise from './promise.class';

module.exports = promiseFactory;

promiseFactory.$inject = [];
function promiseFactory() {
  return {
    create: create
  };

  function create(data) {
    return new PartyPromise(data);
  }
}