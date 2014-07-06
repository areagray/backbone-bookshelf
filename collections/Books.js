var Books = Backbone.Collection.extend({

	model:Book,

	initialize: function(){

	this.on('remove', function(thebook){
		console.log('the one removed from collection is', thebook);
	 	thebook.trigger('hideme');
	});

	}

});