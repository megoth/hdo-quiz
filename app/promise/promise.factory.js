'use strict';

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

class PartyPromise {
  constructor(data) {
    this.data = data;
  }
}