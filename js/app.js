$( document ).ready(function(){
  app.nav = new App.Views.NavView({});
  $('body').append(app.nav.$el);
});
