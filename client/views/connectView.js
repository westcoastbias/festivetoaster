Driftly.ConnectView = Backbone.View.extend({
  className: 'connect',

  template: Templates['connect'],

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});