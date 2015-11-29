import PartyPromise from './promise.class';
import mocks from './promise.mocks';

describe('Class: Promise', function () {
  var data, promise;

  beforeEach(function () {
    data = mocks.getSingleData();
    promise = new PartyPromise(data);
  });

  it('should load data', function () {
    expect(promise.data).toBe(data);
  });
});