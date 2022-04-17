class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

preload(){
    //load audio
    this.load.audio('sfx_select', './assets/assets_blip_select12.wav');
    this.load.audio('sfx_explosion1', './assets/assets_explosion_1.wav');
    this.load.audio('sfx_explosion2', './assets/assets_explosion_2.wav');
    this.load.audio('sfx_explosion3', './assets/assets_explosion_3.wav');
    this.load.audio('sfx_explosion4', './assets/assets_explosion_4.wav');
    this.load.audio('sfx_rocket', './assets/assets_rocket_shot.wav');
}


create() {

    let menuConfig = {
        fontFamily: 'Gorgia',
        fontSize: '28px',
        backgroundColor: '#FFF8E7',
        color: '#000',
        align: 'right',
        padding: {
            top: 5,
            bottom: 5,
        },
        fixedWidth: 0
    }

    //show menut text
    this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Garden Patrol', menuConfig).setOrigin(0.5);
    this.add.text(game.config.width/2, game.config.height/2, 'P1 Arrows & Up  P2 A & D & F ', menuConfig).setOrigin(0.5);
    menuConfig.backgroundColor = '#FFF8E7';
    menuConfig.color = '#000';
    this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);

    //define keys
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

update(){
    if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
        //easy mode
        game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
        //hard mode
        game.settings = {
            spaceshipSpeed:  4,
            gameTimer: 45000
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');
    }
}
}