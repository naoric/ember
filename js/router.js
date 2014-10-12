Youtube.Router.map(function () {
	this.resource('app', function () {
		this.route('video');
		this.route('search');
	});
});


Youtube.AppVideoIndexRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('video/23');
	}
});

Youtube.IndexRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('app');
	}
});

Youtube.AppIndexRoute = Ember.Route.extend({
	redirect: function () {
		this.transitionTo('app.video');
	}
});

Youtube.AppRoute = Ember.Route.extend({
	renderTemplate: function () {
		this.render();

		this.render('playlist', {
			into: 'app',
			outlet: 'playlist'
		});
	},
	setupController: function (controller, model) {
		this.controllerFor('playlist').send('load');
	}
});



Youtube.AppSearchRoute = Em.Route.extend({
  setupController: function (controller) {
  	controller.send('search');
  },
  controllerName: 'search'
});

