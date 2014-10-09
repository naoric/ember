Youtube.AppController = Ember.ObjectController.extend({
	notification: '',
	actions: {
		closeNotification: function () {
			this.set('notification', null);
		},
		notify: function (notification) {
			this.set('notification', notification);
		}
	}
});