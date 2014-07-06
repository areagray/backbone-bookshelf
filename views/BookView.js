var BookView = Backbone.View.extend({

	model:Book,

	initialize: function(){
		this.model.on('hideme', this.hideme, this);

	},

	events:
	{
		'click': 'removeFromModel'
	},

	hideme: function(){
		console.log('hide me triggered on view');
		console.log('this is this', this);
		this.$el.html('');

	},

	removeFromModel: function(){
		this.model.remover();
	},

	tagName: 'tr',

	template: _.template('<td><%= category %></td><td><%= year %></td><td> </td><td> <%= price %> </td><td><%= title %></td><td><%= author %></td><td><button type="button" class="remover">Remove</button></td> '),

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
});