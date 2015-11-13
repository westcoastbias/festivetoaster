window.AppView = Backbone.View.extend({
  template: Templates['layout'],

  initialize: function (params) {
    console.log( 'Shortly is running' );
    $('body').append(this.render().el);
    this.render();
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

  renderIndexView: function (e) {
    e && e.preventDefault();
    this.router.navigate('/', { trigger: true });
  }
});