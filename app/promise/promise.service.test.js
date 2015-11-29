import promise from './promise.app';

describe('Service: Promise', () => {
  beforeEach(angular.mock.module(promise));

  it('should be able to pick ten promises', inject((promiseService) => {
    var promises = promiseService.getPromises();
    expect(promises.length).toBe(10);
  }));
});