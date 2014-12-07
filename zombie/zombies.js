

define(
    ['js/utils'],

    function(Utils) {
        
        var zombies = [],
            
            add = function(options, world, Physics) {

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
                
                console.log(zombies);
            },

            list = function() {
                return zombies;

            };


        return {
            add: add,

            list: list
        };
    }
);
