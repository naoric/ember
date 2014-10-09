Youtube.EmbedView = Ember.View.extend({
	tagName: 'iframe',
	attributeBindings: ['src'],
	src: function () {
		var vidId = this.getPath('video.id');
		return 'http://www.youtube.com/embed/' + vidId;
	}.property()
});