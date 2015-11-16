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