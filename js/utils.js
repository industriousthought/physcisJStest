


define(
    [],

    function() {
        
        var addSprite = function(options, world, Physics) {

                var sprite = Physics.body('sprite', options);

                world.add( sprite );

                world.on('step', function() {
                    sprite.animate();
                });

                return sprite;
            },

            setupWorld = function(options, world, Physics) {
                
                var renderer = Physics.renderer('canvas', {

                    el: 'viewport', // id of the canvas element

                    width: 500,

                    height: 500

                });

                world.add( renderer );

                var integrator = Physics.integrator('improved-euler', {
                    
                    drag: .9
                    
                });

                world.add( integrator );




                world.render();

                Physics.util.ticker.on(function( time, dt ){

                    world.step( time );

                });


                // start the ticker

                Physics.util.ticker.start();

                world.on('step', function(){

                    world.render();

                });

                //world.add( Physics.behavior('constant-acceleration') );

                var bounds = Physics.aabb(0, 0, 500, 500);

                world.add( Physics.behavior('edge-collision-detection', {

                    aabb: bounds,

                    restitution: 0.3

                }) );

                // ensure objects bounce when edge collision is detected

                world.add( Physics.behavior('body-impulse-response') );

                camera = options.test;
            },

            camera = {};

        return {
            addSprite: addSprite,
            
            setupWorld: setupWorld,

            camera: function() { return camera }
        };
    }
);
