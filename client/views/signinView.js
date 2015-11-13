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