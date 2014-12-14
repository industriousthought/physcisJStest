
define(
    ['js/utils'],

    function(Utils) {

        var world,
            Physics,

            init = function(w, p) {
                world = w;
                Physics = p;
            },

            add = function(options) {
                return Utils.addSprite({

                    radius: 10,

                    x: options.x,

                    y: options.y,

                    texMap: {

                        scaler: .5,

                        x: [6, 5],

                        y: 2,

                        activity: 0
                    },

                    styles: {

                        width: 1500,

                        height: 420,
                        
                        src: 'player/img/player.png'


                    }   
                }, world, Physics);

            };


        return {
            add: add,

            init: init
        };
    }
);
