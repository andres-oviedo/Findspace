// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Findspace',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/sign-up/',
    	url: 'sign-up.html',
    	name: 'sign-up',
  		},
		{
		path: '/contactos/',
    	url: 'contactos.html',
    	name: 'contactos',
  		},
		{
		path: '/lugares/',
    	url: 'lugares.html',
    	name: 'lugares',
  		},
		{
		path: '/lugar-pizza/',
    	url: 'lugar-pizza.html',
    	name: 'lugar-pizza',
  		},
		{
		path: '/my-space/',
    	url: 'my-space.html',
    	name: 'my-space',
  		},
		{
		path: '/about-us/',
    	url: 'about-us.html',
    	name: 'about-us',
  		}
	],
	dialog: {
		title: 'Findspace',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Welcome to Rungran Shop !');
    }
	
});



$$(document).on('click', '#btnAddCart', function (e) {
	e.preventDefault();

	
	var notification = app.notification.create({
      icon: '<i class="material-icons">check</i>',
      title: 'Order',
      titleRightText: '',
      subtitle: '',
      text: "Your order has been received.",
      closeTimeout: 3000,
    });
    notification.open();
	
});





