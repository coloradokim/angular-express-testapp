app.config(function($routeProvider) {

  $routeProvider
  .when('/', { // INDEX
    templateUrl: 'js/templates/home.html',
    controller: 'HomeController'
  })
  .when('/new', { // must be above '/:id' otherwise it'll think that the ID is 'new'
    templateUrl: 'js/templates/new.html', // NEW
    controller: 'NewController'
  })
  .when('/:id/edit', { // UPDATE
    templateUrl: 'js/templates/edit.html',
    controller: 'EditController'
  })
  .when('/:id', { // SHOW
    templateUrl: 'js/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/' });
});
