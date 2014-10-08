Youtube.Video = DS.Model.extend({
    id:          DS.attr('string'),
    title:       DS.attr('string'),
    description: DS.attr('string'),
    thumbnail:   DS.attr('string')
});

Youtube.Video.reopenClass({
    search: function(q) {
        var result = Ember.ArrayProxy.create({
            searchResults: []
        }),
            results = [],
            _this = this,
            params = {
                part: 'snippet',
                q: q,
                key: 'AIzaSyBd_Z2fJWZRjAoktexRWmlD0_WXI3y0uw8',
                maxResults: 10
            },
            searchUrl = 'https://www.googleapis.com/youtube/v3/search?' + $.param(params);
        $.getJSON(searchUrl, function(response) {
            var i, item;
            for (i = response.items.length - 1; i >= 0; i--) {
                item = {
                    id: response.items[i].id.videoId,
                    thumbnail: response.items[i].snippet.thumbnails.
                    default.url,
                    description: response.items[i].snippet.description,
                    title: response.items[i].snippet.title
                }
                results.push(item);
            }
            result.set('searchResults', results);
        });
        return result;
    }
});