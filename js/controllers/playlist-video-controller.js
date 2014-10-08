/* global Youtube, Ember */
Youtube.PlaylistVideoController = Ember.ObjectController.extend({
	actions: {
		remove: function (key, value) {
			var model = this.get('model');	
			this.controllerFor('playlist').send('remove', 'uniqueId', model.uniqueId);
		}
	}
});