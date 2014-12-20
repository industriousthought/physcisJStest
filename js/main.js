
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
    'js/utils', 

    'player/player',

    'zombie/zombies',

    'physicsjs',

    'physicsjs/behaviors/edge-collision-detection',

    'physicsjs/integrators/improved-euler',

    'physicsjs/behaviors/body-impulse-response',

    'physicsjs/behaviors/sweep-prune',

    //'physicsjs/behaviors/body-collision-detection',

    'physicsjs/behaviors/player',

    'physicsjs/renderers/canvas',

    'physicsjs/bodies/circle', // will mix into the PhysicsJS library

    'physicsjs/bodies/sprite'


    ], function( Utils, Player, Zombies, Physics ){


        Physics(function( world ){
            Utils.setupWorld({init: [Player, Zombies, Utils]}, world, Physics);

            Zombies.add({x: 90, y: 90, type: 2});
            window.p = Player.add({x: 160, y: 160});

            Utils.follow(p);
            var controller = Physics.behavior('player', { player: p })
            world.add(controller);
        
        });

    }
);


