import PartyPromise from './promise.class';
import mocks from './promise.mocks';

describe('Class: Promise', () => {
  var data, promise;

  beforeEach(() => {
    data = mocks.getSingleData();
    promise = new PartyPromise(data);
  });

  it('should load data', () => {
    expect(promise.data).toBe(data);
  });

  it('can get text', () => {
    expect(promise.getText()).toBe(data.body);
  });

  it('can verify promisor', () => {
    expect(promise.promisedBy('Arbeiderpartiet')).toBe(true);
    expect(promise.promisedBy('Høyre')).toBe(false);
  });
});