
////  Using local storage as a point of reference  /////
//  So many rabbit holes.  By the time I get out; I have trouble rubbing 2 brain cells together to get any clarity //
// I tried reconfiguring this into angular and alas; nothing has come of it.  //
var items = [];

//grabs the input //
$('.save-item').submit(function(e){
  e.preventDefault();

 console.log("it happened");

  var newItem = {
    image: $('#input-image').val(),
    descriptiont: $('#input-description').val(),
    price: $('#input-price').val()

  };

  localStorage.setItem('image', newItem.image);
  localStorage.setItem('description', newItem.descripton);
  localStorage.setItem('price', newItem.price);


  function adding(image, description, price){
      item.push({
        image: image,
        description: description,
        price: price

      });
    }
    adding(newItem.image, newItem.description, newItem.price);
    console.log(item);

    $('.text').val("");
    $(".price").val("");
    $(".description").val("");
  });
