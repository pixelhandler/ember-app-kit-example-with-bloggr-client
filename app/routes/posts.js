import posts from 'appkit/models/posts';

var PostsRoute = Ember.Route.extend({
  model: function() {
    return posts;
  }
});

export default PostsRoute;
