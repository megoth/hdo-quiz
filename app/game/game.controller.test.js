import game from './game.app';

describe('Controller: Game', function () {
  var controller;

  beforeEach(angular.mock.module(game));
  beforeEach(inject(function ($controller) {
    controller = $controller('game');
    spyOn(controller.game, 'giveAnswer');
  }));

  it('should setup game', function () {
    expect(controller.game).toBeDefined();
  });

  it('should setup stack', function () {
    expect(controller.stack).toBeDefined();
  });

  it('can give answer', function () {
    controller.giveAnswer(0);
    expect(controller.game.giveAnswer).toHaveBeenCalledWith(0);
  });

  it('can check whether an index is the current', function () {
    expect(controller.isCurrent(0)).toBe(true);
    expect(controller.isCurrent(1)).toBe(false);
  });

  it('can check whether if game is finished', function () {
    expect(controller.isFinished()).toBe(false);
  });

  describe('swiping a promise to the left', function () {
    beforeEach(function() {
      controller.swipeLeft();
    });

    it('should give answer', function () {
      expect(controller.game.giveAnswer).toHaveBeenCalledWith(0);
    });
  });

  describe('swiping a promise to the right', function () {
    beforeEach(function() {
      controller.swipeRight();
    });

    it('should give answer', function () {
      expect(controller.game.giveAnswer).toHaveBeenCalledWith(1);
    });
  });
});