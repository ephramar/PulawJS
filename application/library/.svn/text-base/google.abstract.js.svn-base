define( function(){

	_mapsLoaded = $.Deferred();

	function GoogleMaps(){
		_mapsLoaded.done(_.bind(function() {
			this.init();
		}, this));
	}
	
	GoogleMaps.prototype.init = function(){
		_mapsLoaded.done(_.bind(function() {
		   
		}, this));
	};

	window.gmapsLoaded = function(){
		delete window.gmapsLoaded;
		_mapsLoaded.resolve();
	}
	
	require(['http://maps.googleapis.com/maps/api/js?sensor=true&callback=gmapsLoaded']);
	
	return GoogleMaps;
	
});
