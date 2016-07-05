// var mainApp = angular.module("mainApp", []); (presence of this piece keeps everything from loading. probably because i already defined it in app.js?)

//initial ajax get request on page load
//consistently receiving 404 Error. switched ports for json placeholder api. to no avail.
mainApp.controller('beeCtrl', function($scope, $http){

$http.get(' http://localhost:3000/beeFFs_list').success(function(data){
  $scope.allBees=data;
  console.log(data)

})

/*------------------------------------------------------------------------------*/

//add to cart sequence
//modal + ajax call--modal not showing up, ignoring as of right now. would be ideal to have a confirmation modal, though
//tried it with traditional ajax call

// $('.addCart').click(function(e){
//     e.preventDefault;
//   $('.confirmAlert, .closeConfirm').addClass('showing');
// console.log("Add cart clicked");
//
      //   $.ajax({
      //       method: 'POST',
      //       dataType: 'json',
      //       url: "http://localhost:3000/beeFFs_list",
      //
      //     }).done(function(data) {
      // console.log(data);
      //
      // console.log('fake Ajax call made');
// });
//
// $('.closeConfirm').on('click', function(e){
//   e.preventDefault
//   $('.confirmAlert, .closeConfirm').css('display', 'none');
// });
//
// console.log("cart confirm modal ready to go");

// });
// });

/*------------------------------------------------------------------------------*/


//attempt at using JSON placeholder demonstrated ajax calls--because maybe i done messed up with mine

$.ajax('http://localhost:3000/beeFFs_list', {
  method: 'GET'
}).then(function(data) {
  console.log(data);
});

/*------------------------------------------------------------------------------*/
//Perceived steps of process
//click bee name (specific bee ID )
//triggers click event
//triggers AJAX POST request for that specific ID
//return/append descritption content to product_detail.html
//click Add to cart
//triggers event
//triggers AJAX POST request for that specific ID
//appends to shopping cart
//viewing shopping cart
//appeneded description and product to cart
//edit cart:
  //input changed information
  //hit enter--submit
  //triggers AJAX post request again?
  //appends new information to view_cart.html

/*------------------------------------------------------------------------------*/
//applying what was shown in Kelly's demo, based on code from http://jsfiddle.net/slav123/75m7e/3/

mainApp.controller('beeCart', function($scope) {
    $scope.invoice = {
        bees: [{
          id: 0,
          name: 'Mr. Pollen',
          type: 'Carniolan',
          price: 25,
          qty: 1,
        }]
    };

$scope.total = function() {
    var total = 0;
    angular.forEach($scope.invoice.items, function(item) {
        total += bee.qty * bee.cost;
    })

    return total;

    allBees: [
      {
        id: 0,
        name: "Mr. Pollen",
        type: "Carniolan",
        price: 25,
        desc: "Mr. Pollen's family hails from the European continent, and his laid back perosnality makes him fun to unwind with.",
        image: "assets/images/mr_pollen.jpg",
      },
          {
            id: 1,
            name: "Strawberry Beauty",
            type: "Russian",
            price: 25,
            desc: "This Southern belle is as smart as she is beautiful. She'll keep you guessing with her inquisitive nature and expansive trivia knowledge.",
            image: "assets/images/strawberry_beauty.jpg",
          },
              {
                id: 2,
                name: "Sean",
                type: "Buckfast",
                price: 25,
                desc: "This Egnlish gentleman is a fine gem for anyone who enjoys afternoon tea and discussing Medeival politics.",
                image: "assets/images/buckfastbee_sean.jpg",
              },
                  {
                    "id": 3,
                    "name": "Dusty Legs",
                    "type": "German",
                    "price": 25,
                    "desc": "Ol' Dusty Legs does best as the only bee in the friend group. He can get a little nervous and likes people who will take time to listen to his life's stories",
                    "image": "assets/images/mr_pollen.png",
                  }
              ]
          }

});
});
