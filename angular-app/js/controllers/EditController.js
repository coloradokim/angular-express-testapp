app.controller('EditController', ["$scope", '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
  console.log("Edit controller");
  $http.get('http://localhost:8080/api/swords/' + $routeParams.id + '/edit/').then(function(response) { // EDIT
    $scope.sword = response.data;
    console.log(response.data);
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.updateSword = function(quote) {
    console.log("Updating sword.");
    var sword = {
      swordName:  $scope.sword.swordName,
      swordOwner: $scope.sword.swordOwner
    };
    console.log($routeParams.id);
    $http.put('http://localhost:8080/api/swords/' + $routeParams.id, sword).then(function(response) { // UPDATE
      $location.path( "/" );
      console.log("Sword updated.");
    }, function(response) {
      console.log("Invalid URL");
    });
  }
}]);
