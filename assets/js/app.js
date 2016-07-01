
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


var beeId;
var clickedBee;
    Admin.controller("mainController", function($scope,$http) {
            var url = "data.txt";
            console.log("is it working");



//  Byron's  Tabby Cat Orphanage referencing ///////////
          // $.ajax({
    //   type: 'GET',
    //   url: 'localhost:3001/item',
    //   data: allBees,
    //   type: "json",
    // }).done(function(allBees){$scope.item = allBees;});

    //this seems to work!
    $http.get('http://localhost:3000/item').success(function(data){
      $scope.item = data;
      beeId = data.length;
      beeId = (data[data.length-1].id)+1;
      console.log(beeId);
      globalData = data;

    });
    })
