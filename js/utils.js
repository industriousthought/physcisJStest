


define(
    [],

    function() {
        
        var init = function(w, p) {
                world = w;
                Physics = p;
            },

            addSprite = function(options) {

                window.sprite = Physics.body('sprite', options);
                Physics.util.extend(sprite, Physics.util.pubsub.prototype);

                world.add( sprite );

                world.on('step', function() {
                    sprite.emit('animateSprite');
                });

                return sprite;
            },

            setupWorld = function(options, world, Physics) {

                for (var i = 0; i < options.init.length; i++) {
                    options.init[i].init(world, Physics);
                }
                
                renderer = Physics.renderer('canvas', {

                    el: 'viewport', // id of the canvas element

                    width: 1000,

                    height: 1000

                });

                world.add( renderer );

                var integrator = Physics.integrator('improved-euler', {
                    
                    drag: .5
                    
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


                var bounds = Physics.aabb(0, 0, 1000, 1000);

                world.add( Physics.behavior('edge-collision-detection', {

                    aabb: bounds,

                    restitution: 0.3

                }) );

                // ensure objects bounce when edge collision is detected

                world.add( Physics.behavior('body-impulse-response') );

            },

            follow = function(o) {

                var camera = Physics.body('point');
                renderer.layer('main').options.follow = camera;
                world.on('step', function() {
                    camera.state.pos.set(o.state.pos.get(0) - 500, o.state.pos.get(1) - 500);
                    camera.state.angular.pos = o.state.angular.pos;

                });
                

            },

            renderer,

            world,

            Physics;

        return {
            addSprite: addSprite,
            
            setupWorld: setupWorld,

            follow: follow,

            init: init
        };
    }
);
