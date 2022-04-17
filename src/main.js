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