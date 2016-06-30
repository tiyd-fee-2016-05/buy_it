
//  Only for Admin load page //
var Admin = angular.module("admin", ['ngRoute']);

Admin.config(function($routeProvider) {
  $routeProvider
    .when('/mainpage', {
      templateUrl: 'main_admin.html',
      controller: 'mainController'
    })
    .when('/editpage', {//portal button
      templateUrl: 'edit_product.html',
      controller: 'mainController'
    })
    .when('/newpage', {
      templateUrl: 'add_new.html',
      controller: 'mainController'
    })
    .otherwise({
      redirectTo: '/mainpage'
    });
});

Admin.controller('mainController', function($scope){
  $scope.data = [{
    img: localStorage.getItem('img'),
    description: localStorage.getItem('description'),
    price: localStorage.getItem('price')
  }];

});
