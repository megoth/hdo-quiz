import promise from './promise.app';

describe('Service: Promise', () => {
  beforeEach(angular.mock.module(promise));

  it('can load promises', inject((promiseService) => {
    expect(promiseService.getPromises().length).toBe(10);
    expect(promiseService.getPromises(5).length).toBe(5);
  }));
});