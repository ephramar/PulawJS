define([

  'models/app.model'
  
], function( projectModel ){

   var projectCollection = Backbone.Collection.extend({
  
    model: projectModel
	
  });
	
   window.Collections = new projectCollection;
   
   return Collections;
   
});