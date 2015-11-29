card.$inject = [];
function card() {
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

module.exports = card;
