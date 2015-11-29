import partyMocks from '../party/party.mocks';
import promiseMocks from '../promise/promise.mocks';
import Game from './game.class';

describe('Class: Game', function () {
  var parties, promises, game;

  beforeEach(function () {
    parties = partyMocks.getList();
    promises = promiseMocks.getList();
    game = new Game(parties, promises);
  });

  it('should set parties', function () {
    expect(game.parties).toBe(parties);
  });

  it('should set promises', function () {
    expect(game.promises).toBe(promises);
  });

  it('should set currentPromise', function () {
    expect(game.currentPromise).toBe(0);
  });

  it('should increase currentPromise when answer is given', function () {
    expect(game.giveAnswer(0)).toBe(1);
    expect(game.currentPromise).toBe(1);
    expect(game.getScore()).toBe(1);
  });

  it('can get number of correct answers', function () {
    expect(game.getScore()).toBe(0);
    game.setAnswer(0, 0);
    expect(game.getScore()).toBe(1);
    game.setAnswer(0, 1);
    expect(game.getScore()).toBe(0);
  });
});