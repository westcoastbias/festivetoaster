window.Driftly = Backbone.View.extend({
  template: Templates['layout'],

  events: {
    'click li a.index': 'renderIndexView',
    'click li a.dashboard': 'renderDashboardView'
    // 'click li a.signin': 'renderSigninView'
  },

  initialize: function (params) {
    console.log( 'Driftly is running' );
    $('body').append(this.render().el);
    this.router = new Driftly.Router({ el: this.$el.find("#container" )});
    console.log(this);
    this.router.on('route', this.updateNav, this);
    console.log('something');
    Backbone.history.start({ pushState: true });
  },

  // render: function () {
  //   this.$el.html( this.template() );
  //   this.$el.append('hello world');
  //   return this;
  // }

  render: function () {
    this.$el.html( this.template() );
    return this;
  },

  renderDashboardView: function (e) {
    e && e.preventDefault();
    this.router.navigate('/dashboard', { trigger: true });
  },

  renderIndexView: function (e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  },

  renderSigninView: function (e) {
    e && e.preventDefault();
    this.router.navigate('/signin', { trigger: true });
  },

  updateNav: function (routeName) {
    this.$el.find('.navigation li a')
      .removeClass('selected')
      .filter('.' + routeName)
      .addClass('selected');
    // this.$el.append('hello world');
    // return this;
  }
});