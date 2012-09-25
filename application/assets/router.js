//this is our router
define(
	[
		'views/index/index',
		'views/index/about',
		'views/index/aboutEpsug',
		'views/index/download'
	],
	function(
		index,
		about,
		aboutEpsug,
		download
	){
		window.AppRouter =  Backbone.Router.extend({
		
			routes: {
				'': 'home',
				'about-this-framework': 'about',
				'about-epsug': 'aboutEpsug',
				'download': 'download'	
			},
			
			home: function(){
				App.changePage( index );
			},
			
			about: function(){
				App.changePage( about );
			},
			
			aboutEpsug: function(){
				App.changePage( aboutEpsug );
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