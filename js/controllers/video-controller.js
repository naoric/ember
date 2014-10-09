/* global Youtube, Ember, console */
'use strict';
Youtube.AppVideoController = Ember.ObjectController.extend({
	video: {},

    actions: {
        addToPlaylist: function(key, value) {
            var model = this.get('model');
            // @todo add this video to the current playlist
            this.controllerFor('playlist').send('add', model);
        }
    }
});