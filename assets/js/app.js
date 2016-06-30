
var app = angular.module("app", ['ngRoute']);
  app.config(function($routeProvider){
    $routeProvider
    .when('/home', {
      templateUrl: 'product_grid.html',
    })//end of /home routing

    .otherwise({

    redirectTo: '/home',
    });
  }); //end of consApp routing
