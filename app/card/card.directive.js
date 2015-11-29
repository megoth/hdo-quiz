card.$inject = [];
export default function card() {
  return {
    scope: {
      game: '=hdoCard'
    },
    link: link
  };

  function link($scope, $element) {
    $scope.game.addCard($element[0]);
  }
}