import Party from './party.class';
import mocks from './party.mocks';

describe('Class: Party', () => {
  var data, party;

  beforeEach(() => {
    data = mocks.getSingleData();
    party = new Party(data);
  });

  it('sets data', () => {
    expect(party.data).toBe(data);
  });
});