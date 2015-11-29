import cardDirective from './card.directive';

export default angular.module('card', [])
  .directive('hdoCard', cardDirective)
  .name;