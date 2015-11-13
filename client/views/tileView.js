Driftly.TileView = Backbone.View.extend({
  className: 'tile',

  template: Templates['tile'],

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});