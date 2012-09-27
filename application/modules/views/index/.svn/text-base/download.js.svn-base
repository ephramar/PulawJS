define([
	'text!templates/index/download.html'
], function( download ){

	var homeView = Backbone.View.extend({
		template: _.template( download ),
		render: function(){
			$(this.el).html( this.template() );
			return this;
		}
	});
	
	return new homeView;
	
});