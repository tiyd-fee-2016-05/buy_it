
//  Only for Admin load page //
var Admin = angular.module("admin", ['ngRoute']);

Admin.config(function($routeProvider) {
  $routeProvider
    .when('/mainpage', {
      templateUrl: 'main_admin.html',
      // controller: 'appAdmin'
    })
    .when('/editpage', {//portal button
      templateUrl: 'edit_product.html',
      // controller: 'appAdmin'
    })
    .when('/newpage', {
      templateUrl: 'add_new.html',
      // controller: 'appAdmin'
    })
    .otherwise({
      redirectTo: '/mainpage'
    });
});
