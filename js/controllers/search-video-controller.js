/* global Youtube, Ember, console */
'use strict';
Youtube.SearchVideoController = Ember.ObjectController.extend({
	video: {},
	needs: 'app',
	app: Ember.computed.alias('controllers.app'),
	actions: {
        addToPlaylist: function(key, value) {
            var model = this.get('model');
            // @todo add this video to the current playlist
            this.controllerFor('playlist').send('add', model);
            this.get('app').send('notify', 'Video Added To Playlist (Click to Close)');
        }
    }
});