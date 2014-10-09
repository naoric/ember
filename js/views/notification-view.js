Youtube.NotificationView = Ember.View.extend({
  notificationHasChanged: function() {
    if (this.get('notification') !== null) {
      this.$().slideDown();
    }
  }.observes('notification'),

  eventManager: Ember.Object.create({
  	click: function(event, view) {
  		$(event.target).fadeOut(function (v) {
  			return function ()	 {
  				v.get('controller').set('notification', null);
  			};
  		}(view));
	    
	 }
  }),
   
  template: Ember.Handlebars.compile("{{view.notification}}")
});