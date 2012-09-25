define(
	[//empty just pass some arguments if you need
	],
	function( categories, google ){
		
		var appModel = Backbone.Model.extend({
		
			defaults:{
				'Model': {
					version: '1.0 Alpha',
					name: 'Bazaar Model',
					author: 'Joseph G.'
				},
				'marketCategories': categories
			},
			
			changePage: function( page ){
			
				$( page.el ).attr('data-role', 'page');
				page.render();
				$( 'body' ).append( $( page.el ) );
				$.mobile.changePage( $( page.el ), { changeHash:false} );
				this.firstPage = false;
				return this;
			},
			
			changeCategory: function( page, catID ){
				
				$( page.el ).attr('data-role', 'page');
				page.render( catID );
				$( 'body' ).append( $(page.el) );
				$.mobile.changePage( $( page.el ), { changeHash:false} );
				this.firstPage = false;
				
				return this;
			},
			
			showListings: function( page, callback ){
				$( page.el ).attr('data-role', 'page');
				page.render();
				$( 'body' ).append( $(page.el) );
				$.mobile.changePage( $( page.el ), { changeHash:false} );
				this.firstPage = false;
				callback();
			},
			
			getOodleSingle: function( page, param, postId ){
				$( page.el ).attr('data-role', 'page');
				page.render( param, postId );
				return this;
			},
			
			getPost: function( id, page, callback ){
				$( page.el ).attr('data-role', 'page');
				page.render( id );
				callback();
			},
			
			prepareMap: function( el, zoom, coordinates ){
			
				/*setting default value for zoom*/
				
				(zoom === undefined ) ? zoom = 8: zoom = zoom;
				(coordinates === undefined ) ? coordinates = App.get('geocoords'): coordinates = coordinates;
				
				//begin
			
					var mapCanvas = $( el ).get( 0 );
					
					google.addMapToCanvas( mapCanvas, 'google' );
					
					centerPoint = new mxn.LatLonPoint( coordinates.latitude , coordinates.longitude );

					mapstraction.setCenterAndZoom( centerPoint , zoom );
						
					mapstraction.addSmallControls();
					
				return this;
				
			},
			removeAllMarkers: function(){
				if( window.mapstraction ){
					mapstraction.removeAllMarkers();
				}
				return this;
			},
			
			setRadius: function( radius ) {
				
				var coordinates = App.get('geocoords');
				
				point = new mxn.LatLonPoint( coordinates.latitude , coordinates.longitude  );
				 
				centerRadius = new mxn.Radius( point, 5 );
				
				mapstraction.removeAllPolylines();
				
				mapstraction.removeAllFilters();
				
				mapstraction.addPolyline( centerRadius.getPolyline(mxn.util.milesToKM(radius), '#39F'));
				
				mapstraction.addFilter('distance', 'le', radius);
				
				return this;
				
			},
			
			addMarker: function( lat, lon, infoBubble, icon, iconSize ) {
			
				mapstraction.addMarkerWithData( new mxn.Marker( new mxn.LatLonPoint( lat, lon  ) ),{
					infoBubble : infoBubble,
					label : "tooltip",
					date : "new Date()",
					marker : 4,
					iconShadowSize : [0,0],
					icon : icon,
					iconSize : iconSize,
					draggable : false,
					hover : false
				});
			},
			
			shout: function( message ){
				alert( message );
			},
			
		});
		
		app = new appModel;
		
		window.App = app;
		
		return new appModel;
	}
);