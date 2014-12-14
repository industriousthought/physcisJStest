

define(
    ['js/utils'],

    function(Utils) {
        
        var zombies = [],
            
            world,
            Physics,

            init = function(w, p) {
                world = w;
                Physics = p;
            },

            add = function(options) {

                zombies.push(Utils.addSprite({

                    radius: 10,

                    x: options.x,

                    y: options.y,

                    texMap: {

                        scaler: .5,

                        x: [6, 5, 2],

                        y: 3,

                        activity: 1
                    },

                    styles: {

                        width: 1500,

                        height: 420,
                        
                        src: 'zombie/img/zombie' + options.type + '.png'


                    }
                }, world, Physics));
                
            },

            list = function() {
                return zombies;

            },

            kill = function(zombie) {
                world.remove(zombie);
                
            },

            world,

            Physics;


        return {
            add: add,

            kill: kill,

            list: list,

            init: init
        };
    }
);
