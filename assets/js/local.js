var items = [];

// grabs the input //
$('.save-item').submit(function(e){
  e.preventDefault();

 console.log("it happened");

  var newItem = {
    img: $('#input-image').val(),
    descriptiont: $('#input-description').val(),
    price: $('#input-price').val()

  };

  localStorage.setItem('img', newItem.img);
  localStorage.setItem('description', newItem.descripton);
  localStorage.setItem('price', newItem.price);


  function adding(img, description, price){
      item.push({
        img: img,
        description: description,
        price: price

      });
    }
    adding(newItem.img, newItem.description, newItem.price);
    console.log(item);

    $('.text').val("");
    $(".price").val("");
    $(".description").val("");
  });
