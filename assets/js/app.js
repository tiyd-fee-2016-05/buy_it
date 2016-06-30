
console.log("JS connected");

//add to cart confirmation modal

$('.addBtn').on('click', function(){
  $('.confirmAlert, .closeConfirm').css('display', 'inline-block');
console.log("Add cart clicked");
});


$('.closeConfirm').on('click', function(e){
  e.preventDefault
  $('.confirmAlert, .closeConfirm').css('display', 'none');
});

console.log("cart confirm modal ready to go")


var mainApp = angular.module("mainApp", ['ngRoute']);
  mainApp.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
      templateUrl: '../../product_grid.html'
    })//end of /home routing

    .when('/product_detail', {
      templateUrl: '../../product_detail.html'
    })//end of /product_detail routing

    .when('/cart', {
      templateUrl: '../../view_cart.html'
    })//end of /product_detail routing

    .otherwise({

    redirectTo: '/home'
    });
  }); //end of consApp routing

console.log("JS run routing");
