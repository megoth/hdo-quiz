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