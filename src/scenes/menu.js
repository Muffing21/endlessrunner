class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load music audio
        this.load.image('menuBackground', './assets/menuBackground.png');
        //audio for skeleton
        this.load.audio('skeleton_laugh', './assets/skeleton_laugh.mp3');

        //audio for background
        this.load.audio('bg_music', './assets/bg_music.wav');

        //jump sound
        this.load.audio('jump_sound', './assets/jump_sound.wav');

        //background image
       




    }

    create() {
        
        
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
        
        //add background music
        this.music = this.sound.add('bg_music', {mute: false, volume: 1.0, rate: 1, loop: true});
        this.music.play();

        //show background
        this.add.tileSprite(0, 0, 1200, 700, 'menuBackground').setOrigin(0, 0);

        // show menu text
        menuConfig.color = '#000';
        menuConfig.backgroundColor = '#00FF00';
        this.add.text(game.config.width/2, game.config.height/3 - borderUISize - borderPadding, 'Eternal Halloween', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press SPACE to play', menuConfig).setOrigin(0.5);

        // define keys
        //keyRIGHT = this.input.keyboard.addkey(Phaser.Input.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyRULE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //this.sound.play("", { volume: 2.0 });
            //this.sound.play('sfx_select');
            this.music.stop();
            this.scene.start("playScene");
        }
        if(Phaser.Input.Keyboard.JustDown(keyRULE)){
            this.scene.start("ruleScene");
        }
         
        } 
    }