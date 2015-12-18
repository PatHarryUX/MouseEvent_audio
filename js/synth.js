console.log('hello');


//Audio Controller
App.Audio = (function(){

  function Controller(opts) {
    console.log(opts);
    console.log(opts.hello);
    console.log(opts.synth_01);
    console.log(opts.synth_02);
    this.synth_01 = opts.synth_01;
    this.synth_02 = opts.synth_02;
  }


  //Setup audio welcome_scene Audio Controller
  Controller.prototype.welcome_scene = function() {
    console.log('welcome scene audio controller');



  }
  //Setup audio sun_scene Audio Controller
  Controller.prototype.sun_scene = function() {
    console.log('sun scene audio controller');

  }

  //Setup audio sea_scene Audio Controller
  Controller.prototype.sea_scene = function() {
    console.log('sea scene audio controller');
  }

  //Setup audio sky_scene Audio Controller
  Controller.prototype.sky_scene = function() {
    console.log('sky scene audio controller');

  }

  //Setup audio night_scene Audio Controller
  Controller.prototype.night_scene = function() {
    console.log('night scene audio controller');

  }

  //Setup audio suns_scene Audio Controller
  Controller.prototype.suns_scene = function() {
    console.log('suns scene audio controller');

    //Set volume for two synths
    this.synth_01.volume.value = -27.5;
    this.synth_02.volume.value = -27.5;

    //Set up timbre for two synths
    this.synth_01.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.85 }
    });
    this.synth02.set({
      "detune": -200,
      "oscillator" : { "type": "sine" },
      "filter" : { "type" : "lowpass" },
      "envelope" : { "attack" : 0.15 }
    });

  }

  return Controller;
})();
