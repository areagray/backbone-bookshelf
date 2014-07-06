var BookView = Backbone.View.extend({

	model:Book,

	template: _.template('<div class="list-group-item"><span>(<%= category %>)</span><span><%= year %> \</span> \
		<span>(<%= price %>)</span><span>(<%= title %>)</span><span>(<%= author %>)</span></div>'),

	render: function(){
		console.log('rendering a book', this.$el.html(this.template(this.model.attributes)));
		return this.$el.html(this.template(this.model.attributes));
	}
});