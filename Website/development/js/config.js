require.config({

	//
	// MAIN ENTRY POINT OF THE APPLICATION -----------------------------------
	//

	deps: ['init'],

	//
	// PATH MAPPINGS FOR MODULES ---------------------------------------------
	// Npte: Require-text needs to be available locally
	// http://stackoverflow.com/questions/11266808/require-js-backbone-optimization
	//

	paths: {
		'jquery'     : 'libs/jquery-1.10.2.min',  	
		'bootstrap'  : 'libs/sass-bootstrap.min'
	},

	//
	// CONFIGURE DEPENDENCIES & EXPORTS --------------------------------------
	//

	shim: {

		'bootstrap': {
			deps    : ['jquery'],
			exports : 'Bootstrap'
		}

	}

});