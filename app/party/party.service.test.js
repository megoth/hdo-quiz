import party from './party.app';

describe('Service: Party', () => {
  beforeEach(angular.mock.module(party));

  it('should be able to pick two parties', inject((partyService) => {
    var parties = partyService.getParties();
    expect(parties.length).toBe(2);
  }));
});