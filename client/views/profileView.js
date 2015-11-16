Driftly.ProfileView = Backbone.View.extend({
  className: 'profile',

  template: Templates['profile'],

  render: function () {
    $('#container').html(this.template(this.model.attributes));
    return this;
  }
});