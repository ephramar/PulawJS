/**
 * MainJS
 * Application Bootloader
 * ClubKoncepto Web Development
 *
 * This loads all necessary scripts dependencies
 * @package PulawJS 1.0.0
 * @author dunhakdis
 *
 */


/**
 * Defines the path where this Application is installed
 */
var __BASE_URL__ = '/PulawJS/mobile';
var __BASE__ = '/PulawJS/mobile/application';

// Change the paths of the folders at your own risk
requirejs.config({
	baseUrl: __BASE__ + '/library',

	paths: {
		assets: 	__BASE__ + '/assets',
		app: 		__BASE__ + '/app',
		views: 		__BASE__ + '/modules/views',
		templates: 	__BASE__ + '/modules/templates',
		collections:__BASE__ + '/modules/collections',
		models: 	__BASE__ + '/modules/models',
		async: 		__BASE__ + '/library/async',
		google: 	__BASE__ + '/library/google',
		locate: 	__BASE__ + '/library/locate'
	}
});

require(
	["require","jquery","assets/backbone","text","mapstraction","models/app.model", "locate"],

	function( require, $,Backbone,text,App ) {
		require(["require","app","jquery/mobile"],
		
		function( require, App ){
			
			$.mobile.linkBindingEnabled = false;
			$.mobile.hashListeningEnabled = false;
			$.mobile.pushStateEnabled = false;
			$.mobile.loadingMessageTheme = 'a';
			$.mobile.loadingMessageTextVisible = true;		
			$.mobile.defaultPageTransition = 'slide';
			
			$('div[data-role="page"]').live('pagehide', function (event, ui) {
				$(event.currentTarget).remove();
			});
			
			App.initialize();
		});
	}
);