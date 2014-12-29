


define(
    [],

    function() {
        
        var init = function(w, p) {
                world = w;
                Physics = p;
            },

            addSprite = function(options) {

                sprite = Physics.body('sprite', options);

                world.add( sprite );


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
                    
                    drag: 0.1
                    
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

                world.add( Physics.behavior('sweep-prune', {
                }));

                world.add( Physics.behavior('body-collision-detection', {


                }));

                // ensure objects bounce when edge collision is detected

                world.add( Physics.behavior('body-impulse-response') );

            },

            follow = function(o) {

                var camera = Physics.body('point');
                renderer.layer('main').options.follow = camera;
                world.on('step', function() {
                    camera.state.pos.set( - (o.state.pos.get(0) + 500), - (o.state.pos.get(1)  + 500));
                    camera.state.angular.pos = - o.state.angular.pos - Math.PI / 2;

                });
                

            },

            addBackground = function(options) {

                var x, 
                y,  
                i, 
                j,
                o;

                options.treatment = 'static';
                if (!options.x) { options.x = 0; }
                if (!options.y) { options.y = 0; }
                x = options.x;
                y = options.y;
                options.styles.width = options.width;
                options.styles.height = options.height;

                if (options.repeat) {

                    for ( i = 0; i < options.repeat.rows; i++ ) {
                        for ( j = 0; j < options.repeat.columns; j++ ) {
                            options.x = x + i * options.width; 
                            options.y = y + j * options.height; 
                            o = Physics.body('rectangle', options);
                            o.background = true;
                    
                            world.add(o);
                        }   
                    }   

                }

            },

            renderer,

            world,

            Physics;

        return {
            addSprite: addSprite,
            
            setupWorld: setupWorld,

            follow: follow,
            
            addBackground: addBackground,

            init: init
        };
    }
);
