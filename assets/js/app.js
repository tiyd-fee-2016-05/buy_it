
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



    Admin.controller("mainController", function($scope,$http) {
            var url = "item.image";
            console.log("is it working");



//  Byron's  Tabby Cat Orphanage referencing ///////////
          // $.ajax({
    //   type: 'GET',
    //   url: 'localhost:3001/item',
    //   data: allBees,
    //   type: "json",
    // }).done(function(allBees){$scope.item = allBees;});

    //this seems to work!
    $http.get('http://localhost:3005/item').success(function(data){
      $scope.items = data;
      // item = data.length;
      // item = (data[data.length-1].id)+1;
      console.log("working!");
      console.log(data);
      console.log($scope.items);


    });
//ng-click post(function)//
    $http.post('http://localhost:3005/item/').success(function(data) {
      $scope.item = data;


      // console.log(data);
      console.log($scope.items);
    });


    })
