var IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('posts');
  }
});

export default IndexRoute;
