$(document).on('ready', function() {
 

var templateSource = $('#my-template').html();
	console.log('Template Source: ', templateSource);

var template = Handlebars.compile(templateSource);
	//console.log('My Template: ', template);

var productsData = {
  productsList: [
    {
      title: "Super Mario World",
      cost: 11.25,
      image: "http://ecx.images-amazon.com/images/I/31QRKPQ24FL._AA160_.jpg",
      details: {
        players: "1-2",
        levels: "74 different areas in 7 different castles"
      }
    },
    {
      title: "Donkey Kong Country",
      cost: 12.45,
      image: "http://ecx.images-amazon.com/images/I/31ACJPWHBVL._AA160_.jpg",
      sale: 5.00,
      details: {
        characters: "Donkey Kong and Diddy Kong",
        enemies: "Kremlings"
      }
    },
    {
      title: "Street Fighter II",
      cost: 4.94,
      image: "http://ecx.images-amazon.com/images/I/51aqQ0RJtxL._AA160_.jpg",
      details: {
        description: 'Get dirty with the nasty street fighters in the multi-player Street Fighter II.'
      }
    }
  ]
  };
  
// 1st try, only had productsData.length.  Needed productsData.productsList.length
  for(var i=0; i < productsData.productsList.length; i++) {

  		$('#product-container').append( template( productsData.productsList[i] ) );
  		console.log(template(productsData.productsList[i]));
};

 var wishList = $('#my-wish-template').html();
 	console.log('template source: ', wishList)
 var wishListTemplate = Handlebars.compile(wishList);
 	console.log('wish list template:', wishListTemplate)

	$('.product').click(function() {
		var grab = $(this).find('h1').text();
		$('#wishlist').append(wishListTemplate({title: grab}));

		//$('#wishlist').append(wishListTemplate);
		console.log(grab);
	}) 


	// $('#wishlist').append(wishListTemplate);
	// console.log(wishListTemplate);

});

