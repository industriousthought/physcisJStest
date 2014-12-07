
define(
    ['js/utils'],

    function(Utils) {

        var add = function(options, world, Physics) {
                Utils.addSprite({

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
            add: add 
        };
    }
);
