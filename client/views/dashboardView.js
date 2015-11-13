Driftly.DashboardView = Backbone.View.extend({
  className: 'dashboard',

  template: Templates['dashboard'],

  initialize: function () {
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
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