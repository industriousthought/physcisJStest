

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

                var sprite = Utils.addSprite({

                    radius: 100,

                    x: options.x,

                    y: options.y,

                    styles: {

                        texMap: {

                            x: [6, 5, 2],

                            y: 3,

                            activity: 1
                        },

                        width: 1500,

                        height: 420,
                        
                        src: 'zombie/img/zombie' + options.type + '.png'


                    }
                }, world, Physics);

                sprite.health = 100;

                sprite.hit = function() {
                    sprite.health -= 25;
                    if (sprite.health <= 0) {
                        world.remove(this);
                    }
                };

                sprite.name = 'zombie';

                zombies.push(sprite);
                
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
