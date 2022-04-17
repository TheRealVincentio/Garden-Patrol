let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD;
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let explosions = ['sfx_explosion1','sfx_explosion2','sfx_explosion3','sfx_explosion4'];

//Stephanie Styffe Garden Patrol 04/17/22 ~10 hours
// Implement a simultaneous two-player mode (30)
// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// Create 4 new explosion SFX and randomize which one plays on impact (10)
//total 100, yeah it's not that good but I'm not complaining.