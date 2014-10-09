/* global Youtube, Ember */
Youtube.PlaylistVideoController = Ember.ObjectController.extend({
	actions: {
		remove: function (key, value) {
			var model = this.get('model');	
			this.controllerFor('playlist').send('remove', 'uniqueId', model.uniqueId);
		},
        play: function () {
        	var video = this.get('model');
        	this.controllerFor('appVideo').set('video', video);
        }
	}
});