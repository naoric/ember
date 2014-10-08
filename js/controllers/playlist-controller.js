Youtube.PlaylistController = Ember.ArrayController.extend({
	videos:    [],
	currentId: 0,
	actions:   {
		add: function (video) {
			var instance = Ember.copy(video);
			instance.uniqueId = this.get('currentId');

			this.get('videos').pushObject(instance);
			this.incrementProperty('currentId');

		},
		clear: function () {
			this.set('currentId', 0);
			this.set('videos', []);
		},
		remove: function (prop, value) {
			var item = this.get('videos').findProperty(prop, value);
			this.get('videos').removeObject(item);
			this.decrementProperty('currentId');
		}
	}
});