Driftly.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$el = options.el;
  },

  routes: {
    '': 'index',
    'create': 'create'
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

  create: function () {
    // this.swapView(new Shortly.createLinkView());
  }
});
