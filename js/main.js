
require.config({

    baseUrl: './',

    // ...

    packages: [

    {

        name: 'physicsjs',

        location: 'node_modules/PhysicsJS_wip/physicsjs',

        main: 'physicsjs-full.js'

    }

    ],

    //...

});



require([
    'js/collisionRule',

    'js/utils', 

    'player/player',

    'zombie/zombies',

    'physicsjs',

    'physicsjs/behaviors/edge-collision-detection',

    'physicsjs/behaviors/sweep-prune',

    'physicsjs/behaviors/body-impulse-response',

    'physicsjs/integrators/improved-euler',

    'physicsjs/behaviors/sweep-prune',

    'physicsjs/behaviors/body-collision-detection',

    'physicsjs/behaviors/zombie',

    'physicsjs/behaviors/player',

    'physicsjs/renderers/canvas',

    'physicsjs/bodies/rectangle', // will mix into the PhysicsJS library

    'physicsjs/bodies/circle', // will mix into the PhysicsJS library

    'physicsjs/bodies/sprite'


    ], function( CollisionRule, Utils, Player, Zombies, Physics ){


        Physics(function( world ){
            Utils.setupWorld({init: [CollisionRule, Player, Zombies, Utils]}, world, Physics);

            Utils.addBackground({ 
                styles: {
                    src: 'img/tile.png'

                }, 
                
                repeat: { 
                
                    columns: 10,

                    rows: 10

                },

                width: 300,

                height: 300
            });

            //Zombies.add({x: 90, y: 90, type: 2});
            //Zombies.add({x: 490, y: 490, type: 2});

            window.p = Player.add({x: 160, y: 160});

            //Utils.follow(p);
            var controller = Physics.behavior('player', { player: p });
            world.add(controller);
        
            world.add(Physics.behavior('zombie', { zombies: Zombies, follow: p }));

            world.on('collisions:detected', function(e) {
                CollisionRule.collisions(e.collisions);
                
            });
        });

    }
);


