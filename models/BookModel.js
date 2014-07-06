var Book = Backbone.Model.extend({

		remover: function(){
			console.log('remover triggered');
			console.log('about to remove this', this);
		this.collection.remove(this);
	}
});