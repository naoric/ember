Youtube.SearchController = Em.ArrayController.extend({
	searchResults: [],
	actions: {
		search: function() {
			var term = this.get('term');
			this.set('searchResults', Youtube.VideoSearch.search(term));
		}
	}
});