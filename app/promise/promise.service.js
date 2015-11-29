import mocks from './promise.mocks';
import _ from 'underscore';
import PartyPromise from './promise.class';

promiseService.$inject = [];
export default function promiseService() {
  return {
    getPromises: getPromises
  };

  function getPromises(numberOfPromises) {
      var promises = mocks.getListData();
      return _(promises).shuffle().slice(0, numberOfPromises || 10).map((promiseData) => new PartyPromise(promiseData));
    }
}