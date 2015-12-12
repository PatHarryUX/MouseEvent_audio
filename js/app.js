$( document ).ready( function(){

  app.current_scene = {}
  app.current_scene.group = '';

  //Handle the nav link click interactions
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
          $('#app').empty();
          $('#title').html('<h2 class="animated fadeIn">welcome</h2>');
          app.current_scene.group = 'welcome';
          console.log( app.current_scene.group );
          break;
        case 'sea_nav_link':
          console.log('sea nav link');
          $('body').removeClass();
          $('#app').empty();
          $('#title').html('<h2 class="animated fadeIn">touch the sea</h2>');
          app.current_scene.group = 'sea';
          console.log( app.current_scene.group );
          break;
        case 'sun_nav_link':

          console.log('sun nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
          $('body').attr('class','sun-bg');

          console.log( app.current_scene.group );
          console.log( app.current_scene.group === 'thick_lines' );
          //Check if the current scene is in the same group as this selected one
          if ( app.current_scene.group === 'thick_lines' ) {
            $('#app').removeClass();
            $('#app').addClass('sun_scene');
          } else {
            app.current_scene.group = 'thick_lines';
            $('#app').removeClass();
            $('#app').addClass('sun_scene');
            var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
            var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
            $('#app').append( circles_and_triangles_template );
          }

          break;
        case 'sky_nav_link':
          console.log('sky nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sky</h2>');
          $('body').attr('class','sky-bg');

          console.log( app.current_scene.group );
          console.log( app.current_scene.group === 'thick_lines' );
          //Check if the current scene is in the same group as this selected one
          if ( app.current_scene.group === 'thick_lines' ) {
            $('#app').removeClass();
            $('#app').addClass('sky_scene');
          } else {
            app.current_scene.group = 'thick_lines';
            $('#app').removeClass();
            $('#app').addClass('sky_scene');
            var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
            var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
            $('#app').append( circles_and_triangles_template );
          }
          break;
        case 'night_nav_link':
          console.log('night nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the night</h2>');
          $('body').attr('class','night-bg');

          console.log( app.current_scene.group );
          console.log( app.current_scene.group === 'thick_lines' );
          //Check if the current scene is in the same group as this selected one
          if ( app.current_scene.group === 'thick_lines' ) {
            $('#app').removeClass();
            $('#app').addClass('night_scene');
          } else {
            app.current_scene.group = 'thick_lines';
            $('#app').removeClass();
            $('#app').addClass('night_scene');
            var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
            var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
            $('#app').append( circles_and_triangles_template );
          }
          break;
        case 'suns_nav_link':
          console.log('suns nav link');
          $('body').removeClass();
          $('#title').html('<h2 class="animated fadeIn">touch the sun</h2>');
          $('body').attr('class','suns-bg');


          console.log( app.current_scene.group );
          console.log( app.current_scene.group === 'thick_lines' );
          //Check if the current scene is in the same group as this selected one
          if ( app.current_scene.group === 'thick_lines' ) {
            $('#app').removeClass();
            $('#app').addClass('suns_scene');
          } else {
            app.current_scene.group = 'thick_lines';
            $('#app').removeClass();
            $('#app').addClass('suns_scene');
            var circles_and_triangles_source = $( '#circles-and-triangles-template' ).html();
            var circles_and_triangles_template = Handlebars.compile( circles_and_triangles_source );
            $('#app').append( circles_and_triangles_template );
          }

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
