/**
 * Define the routers
 */
define(
	[
		'views/index/index',
		'views/index/about',
		'views/index/download'
	],
	function(
		index,
		about,
		download
	){
		window.AppRouter =  Backbone.Router.extend({
		
			routes: {
				'': 'home',
				'about-this-framework': 'about',
				'download': 'download'	
			},
			
			home: function(){
				App.changePage( index );
			},
			
			about: function(){
				App.changePage( about );
			},
			
			download: function(){
				App.changePage( download );
			}

		});
			
		var initialize = function(){
			var app_router = new AppRouter;
				Backbone.history.start();
		}
			
		return{
			initialize: initialize
		}
	}
);