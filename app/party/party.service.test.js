describe('Service: Party', () => {
  beforeEach(angular.mock.module('hdoQuiz'));

  it('should be able to pick two parties', inject((partyService) => {
    var parties = partyService.getParties();
    expect(parties.length).toBe(2);
  }));
});