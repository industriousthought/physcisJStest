
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

    'physicsjs/behaviors/constant-acceleration',

    'physicsjs/renderers/canvas',

    'physicsjs/bodies/circle', // will mix into the PhysicsJS library

    'physicsjs/bodies/sprite'


    ], function( Utils, Player, Zombies, Physics ){


        Physics(function( world ){

            Utils.setupWorld({test: 'test'}, world, Physics);

            Zombies.add({x: 90, y: 90, type: 2}, world, Physics);
            Player.add({x: 160, y: 160}, world, Physics);
            console.log(Utils.camera());

    /*
            document.addEventListener('keydown', function(event) {
                if (event.keyCode === 39) { player.state.vel.x = 1 }
                if (event.keyCode === 37) { player.state.vel.x = -1 }
                console.log(event.keyCode);

            }, false);
*/
        });

    }
);

