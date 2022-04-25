//ZhiBin Huang
//1800336
//CMPM 120 Spring 2022.


class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load music audio
        this.load.image('bg', './assets/background.png');
    }

    create() {
        //show background
        this.add.tileSprite(0, 0, 1500, 850, 'background').setOrigin(0, 0);
        
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Endless Runner: Halloween', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ arrows to move & SPACEBAR to jump', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        //this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

        // define keys
        //keyRIGHT = this.input.keyboard.addkey(Phaser.Input.KeyCodes.RIGHT);
        keySTART = this.input.keyboard.addkey(Phaser.Input.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySTART)) {
            //this.sound.play("", { volume: 2.0 });
            //this.sound.play('sfx_select');
            this.scene.start("playScene");
        }
          //this.sound.play('sfx_select');
          //this.scene.start('playScene');    
        } 
    }