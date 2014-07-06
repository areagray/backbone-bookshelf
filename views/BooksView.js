 var BooksView = Backbone.View.extend({

 initialize: function(){
 	this.render();
 },	

 remove: function(){


 },

 render: function(){
 	this.collection.forEach(this.addOne, this);

 },

 addOne: function(book){
 	var bookView = new BookView({model:book});
 	bookView.render();
	this.$el.append(bookView.el);
 	}
 });