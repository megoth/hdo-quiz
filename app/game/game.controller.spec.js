// var GameController = require('./game.controller');

// describe('Controller: Game', function () {
//   var controller;

//   beforeEach(module('hdoQuiz'));
//   beforeEach(inject(function () {
//     controller = new GameController();
//   }));

//   it('should setup currentPromise', function () {
//     expect(controller.currentPromise).toBe(0);
//   });

//   it('should setup stack', function () {
//     expect(controller.stack).toBeDefined();
//   });

//   describe('swiping a promise to the left', function () {
//     beforeEach(function() {
//       controller.swipeLeft();
//     });

//     it('should increase currentPromise', function () {
//       expect(controller.currentPromise).toBe(1);
//     });
//   });

//   describe('swiping a promise to the right', function () {
//     beforeEach(function() {
//       controller.swipeRight();
//     });

//     it('should increase currentPromise', function () {
//       expect(controller.currentPromise).toBe(1);
//     });
//   });
// });