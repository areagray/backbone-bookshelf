 var BooksView = Backbone.View.extend({

 initialize: function(){
 	console.log('initializing books collection view')
 	this.render();
 },	

 render: function(){
 	this.collection.forEach(this.addOne, this);

 },

 addOne: function(book){
 	console.log('adding one to collection');
 	var bookView = new BookView({model:book});
 	 return this.$el.append(bookView.render().el);
 	}
 });