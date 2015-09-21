app.controller('HomeController', ['$scope', '$http', function($scope, $http){
  console.log("Home controller.");
  $http.get('http://localhost:8080/api/swords/').then(function(response) { // INDEX
    $scope.swords = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);

$scope.deleteSword = function(sword) { // DESTROY
  console.log("Deleting sword.");
  $http.delete('http://localhost:8080/api/swords/' + sword._id).then(function(response){
    console.log("Sword deleted.");
    $route.reload();
  }, function(response) {
    console.log("Failed to reload page.");
  });
};
