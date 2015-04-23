App = Ember.Application.create();

App.Router.map(function(){
  this.resource('about');
  this.resource('contact');
  this.resource('services', function(){
    this.route('service');
    this.route('development');
    this.route('design');
    this.route('management');
    this.route('support');
  });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        // this redirects / to /dashboard
        this.transitionTo('services.service');
    }
});
