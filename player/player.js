
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

                sprite = Utils.addSprite({

                    radius: 50,

                    x: options.x,

                    y: options.y,

                    styles: {

                        texMap: {

                            x: [6, 5],

                            y: 2,

                            activity: 0
                        },


                        width: 1500,

                        height: 420,
                        
                        src: 'player/img/player.png'


                    }   
                }, world, Physics);
                
                sprite.shoot = function() {
                    var options = { 
                            x: this.state.pos.get(0) + Math.cos(this.state.angular.pos) * 25,
                            y: this.state.pos.get(1) + Math.sin(this.state.angular.pos) * 25, 
                            radius: 25,
                            mass: 3,
                            styles: {
                                src: 'img/bullet'
                            }
                        },

                        bullet = Physics.body('circle', options);
//window.b = bullet;
 
                    world.add(bullet);
                    bullet.state.angular.pos = this.state.angular.pos;
                    bullet.name = 'bullet';
                    bullet.state.acc.set(
                        Math.cos(this.state.angular.pos) * 1,
                        Math.sin(this.state.angular.pos) * 1
                    );

                };

                sprite.name = 'player';

                return sprite;

            };


        return {
            add: add,

            init: init
        };
    }
);
