/* global Youtube, Ember, console */
'use strict';
Youtube.VideoController = Ember.ObjectController.extend({
    actions: {
        addToPlaylist: function(key, value) {
            var model = this.get('model');
            // @todo add this video to the current playlist
            this.controllerFor('playlist').send('add', model);
        }
    }
});