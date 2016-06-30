
console.log("JS connected");

var mainApp = angular.module("mainApp", ['ngRoute']);
  mainApp.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: '../../product_grid.html'
    })//end of /home routing

    .when('/product_detail', {
      templateUrl: '../../product_detail.html'
    })//end of /product_detail routing

    .otherwise({

    redirectTo: '/home'
    });
  }); //end of consApp routing

console.log("JS makes to end");
