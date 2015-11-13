var AppView = Backbone.View.extend({
  template: Templates['layout'],

  initialize: function (params) {
    this.render();
  },

  render: function () {
    this.$el.html( this.template() );
    this.$el.append('hello world');
    return this;
  }
});