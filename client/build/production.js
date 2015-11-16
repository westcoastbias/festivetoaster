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
Driftly.AppModel = Backbone.Model.extend({
  initialize: function (params) {

  }
});

Driftly.SigninView = Backbone.View.extend({
  className: 'signin',

  // template: Templates['signin'],

  events: {
    'click li a.signin': 'fbAuthPost'
  },

  initialize: function () {
    $('body').append(this.render().el);
    this.render();
  },

  fbAuthPost: function (e) {
    e.preventDefault();
    console.log('inside fbAuthPost');

  },

  render: function () {
    this.$el.html( this.template() );
    return this;
  }
});
Driftly.User = Backbone.Model.extend({
  urlRoot: '/users'
});

Driftly.TileView = Backbone.View.extend({
  className: 'tile',

  template: Templates['tile'],

  events: {
    'click': 'renderProfile'
  },

  renderProfile: function () {
    var profileView = new Driftly.ProfileView({ model: this.model });
    this.$el.html(profileView.render().el);
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
Driftly.Users = Backbone.Collection.extend({
  model: Driftly.User,
  url: '/users'
});

Driftly.DashboardView = Backbone.View.extend({
  className: 'dashboard',

  template: Templates['dashboard'],

  initialize: function () {
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
    console.log('fetching');
  },

  render: function () {
    this.$el.empty();
    this.$el.html( this.template() );
    return this;
  },

  addAll: function () {
    this.collection.forEach(this.addOne, this);
  },

  addOne: function (item) {
    var view = new Driftly.TileView({ model: item });
    this.$el.append(view.render().el);
  }
});
Driftly.ConnectView = Backbone.View.extend({
  className: 'connect',

  template: Templates['connect'],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
Driftly.ProfileView = Backbone.View.extend({
  className: 'profile',

  template: Templates['profile'],

  render: function () {
    $('#container').html(this.template(this.model.attributes));
    return this;
  }
});
Driftly.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.el;
  },

  // !!!not sure what the router here is for...

  // TODO! Use router for routing from dashboard to tile, but not when
  // clicking into tile to get a more in depth look (i.e. for tile to flip
    // up we can use router, but not whole page)

  routes: {
    '': 'index',
    'create': 'create',
    'dashboard': 'dashboard',
    'connect': 'connect'
  },

  swapView: function (view) {
    this.$el.html(view.render().el);
  },

  index: function () {
    // var app = new Driftly.AppModel();
    // var appView();
    // var links = new Shortly.Links();
    // var linksView = new Shortly.LinksView({ collection: links });
    // this.swapView(linksView);
  },

  dashboard: function () {
    var users = new Driftly.Users();
    var dashboardView = new Driftly.DashboardView({ collection: users });
    this.swapView(dashboardView);
  },

  connect: function () {
    var users = new Driftly.Users();
    var connectView = new Driftly.ConnectView({ collection: users });
    this.swapView(connectView);
  },

  create: function () {
    // this.swapView(new Shortly.createLinkView());
  },

  signin: function () {
    // alert(12);
    // this.swapView(new Driftly.SigninView());
  }
});
