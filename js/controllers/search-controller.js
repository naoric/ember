Youtube.SearchController = Em.ArrayController.extend({
	searchResults: [],
	queryParams:   ['term'],
	actions:       {
		search: function() {
			var term = this.get('term');
			this.set('searchResults', Youtube.Video.search(term));
		}
	}
});