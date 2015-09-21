app.controller('ShowController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  console.log("Show controller.");
  $http.get('http://localhost:8080/api/swords/' + $routeParams.id).then(function(response) { // SHOW
    $scope.sword = response.data;
    console.log($scope.sword);
  }, function(response) {
    console.log("Invalid URL");
  });
}]);
