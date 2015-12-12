$( document ).ready(function(){

  $('nav a').on('click', {'foo':'bar'} , function( event ) {
    console.log( $( this ).hasClass('active_link') );
    if ( $( this ).hasClass('active_link')  ) {
      console.log( 'link is active' );
    } else {
      $('*').removeClass('active_link');
      $(this).addClass('active_link');
      switch ( $(this).attr('id') ) {
        case 'welcome_nav_link':
          console.log('welcome nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">welcome</h2>');
          break;
        case 'sea_nav_link':
          console.log('sea nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sea</h2>');
          break;
        case 'sun_nav_link':
          console.log('sun nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
          $('body').attr('class','sun-bg');
          break;
        case 'sky_nav_link':
          console.log('sky nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sky</h2>');
          $('body').attr('class','sky-bg');
          break;
        case 'night_nav_link':
          console.log('night nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the night</h2>');
          $('body').attr('class','night-bg');
          break;
        case 'suns_nav_link':
          console.log('suns nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
          $('body').attr('class','suns-bg');
          break;
        default:
          console.log( 'default' );
      }
    }
  });












  /*
  app.nav = new App.Views.NavView({});
  $('body').append(app.nav.$el);
  */

});
