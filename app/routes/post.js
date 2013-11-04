import posts from 'appkit/models/posts';

var PostRoute = Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

export default PostRoute;
