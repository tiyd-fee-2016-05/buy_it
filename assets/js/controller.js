// Admin.controller('mainController', function($scope){
//   $scope.data = [{
//     img: localStorage.getItem('img'),
//     description: localStorage.getItem('description'),
//     price: localStorage.getItem('price')
//   }];
//
// });


Admin.controller('mainController', [ '$http', '$scope', function($http, $scope){
  $scope.message = "SCOPE IS WORKING";
