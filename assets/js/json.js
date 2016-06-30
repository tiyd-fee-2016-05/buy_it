var items = [];

$('.save-item').submit(function(e){
  e.preventDefault();


  var newItem = {
    img: $('#input-img').val(),
    descriptiont: $('#input-description').val(),
    price: $('#input-price').val()

  };

  localStorage.setItem('img', newInput.img);
  localStorage.setItem('description', newInput.descripton);
  localStorage.setItem('price', newInput.price);
