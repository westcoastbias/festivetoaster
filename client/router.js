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
    'dashboard': 'dashboard'
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

  create: function () {
    // this.swapView(new Shortly.createLinkView());
  },

  signin: function () {
    // alert(12);
    // this.swapView(new Driftly.SigninView());
  }
});
