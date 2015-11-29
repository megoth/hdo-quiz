import mocks from './party.mocks';
import _ from 'underscore';
import Party from './party.class';

partyService.$inject = [];
export default function partyService() {
  return {
    getParties: getParties
  };

  function getParties() {
    return mocks.getListData()
      .filter((party) => party.slug === 'a' || party.slug === 'sv')
      .map((data) => new Party(data));
  }
}