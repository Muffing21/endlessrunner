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
    }

    create() {
        // menu text configuration
        let titleConfig1 = {
            fontFamily: 'Pangolin',
            fontSize: '64px',
            backgroundColor: '#39FF14',
            color: '#ff8c00',
            align: 'right',
        }

        let titleConfig2 = {
            fontFamily: 'Pangolin',
            fontSize: '32px',
            color: '#ffa90a',
            align: 'right',
        }

        //menu text UI
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;

        //add background music
        this.music = this.sound.add('bg_music', {mute: false, volume: 1.0, rate: 1, loop: true});
        this.music.play();
        
        //show background
        this.add.tileSprite(0, 0, 1200, 700, 'menuBackground').setOrigin(0, 0);

        // show menu text
        this.add.text(centerX, centerY/3 - borderUISize - borderPadding, 'Eternal Halloween', titleConfig1).setOrigin(0.5);
        this.add.text(centerX, centerY/2 + 100, 'Press S for Credits', titleConfig2).setOrigin(0.5);
        this.add.text(centerX, centerY/2 + 50, 'Press W for Game Introduction', titleConfig2).setOrigin(0.5);
        this.add.text(centerX, centerY/2 + 0, 'Press SPACE to Play', titleConfig2).setOrigin(0.5);

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
    }

    update() {
        //Space to start the game
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.music.stop();
            this.scene.start("playScene");
        }
        //W for rule page
        if(Phaser.Input.Keyboard.JustDown(KeyW)){
            this.music.stop();
            this.scene.start("ruleScene");
        }
        //S for rule page
        if(Phaser.Input.Keyboard.JustDown(keyS)){
            //this.music.play();
            this.music.stop();
            this.scene.start("creatorScene");
        }
        } 
    }


// class Menu extends Phaser.Scene {
//     constructor() {
//         super("menuScene");
//     }

//     preload() {
//         // load music audio
//         this.load.image('menuBackground', './assets/menuBackground.png');
//         //audio for skeleton
//         this.load.audio('skeleton_laugh', './assets/skeleton_laugh.mp3');
//         //audio for background
//         this.load.audio('bg_music', './assets/bg_music.wav');
//         //jump sound
//         this.load.audio('jump_sound', './assets/jump_sound.wav');
//     }

//     create() {
//         // menu text configuration
//         let menuConfig = {
//             fontFamily: 'Courier',
//             fontSize: '28px',
//             backgroundColor: '#F3B141',
//             color: '#843605',
//             align: 'right',
//             padding: {
//                 top: 5,
//                 bottom: 5,
//             },
//             fixedWidth: 0
//         }

//         //menu text UI
//         let centerX = game.config.width / 2;
//         let centerY = game.config.height / 2;

//         //add background music
//         this.music = this.sound.add('bg_music', {mute: false, volume: 1.0, rate: 1, loop: true});
//         this.music.play();
        
//         //show background
//         this.add.tileSprite(0, 0, 1200, 700, 'menuBackground').setOrigin(0, 0);

//         // show menu text
//         menuConfig.color = '#000';
//         menuConfig.backgroundColor = '#00FF00';
//         this.add.text(centerX, centerY/3 - borderUISize - borderPadding, 'Eternal Halloween', menuConfig).setOrigin(0.5);
//         this.add.text(centerX, centerY/2 + 100, 'Press S to creator', menuConfig).setOrigin(0.5);
//         this.add.text(centerX, centerY/2 + 40, 'Press W to Rule', menuConfig).setOrigin(0.5);
//         this.add.text(centerX, centerY/2 - 40, 'Press SPACE to play', menuConfig).setOrigin(0.5);

//         // define keys
//         keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
//         keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
//         KeyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
//     }

//     update() {
//         //Space to start the game
//         if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
//             this.music.stop();
//             this.scene.start("playScene");
//         }
//         //W for rule page
//         if(Phaser.Input.Keyboard.JustDown(KeyW)){
//             this.music.stop();
//             this.scene.start("ruleScene");
//         }
//         //S for rule page
//         if(Phaser.Input.Keyboard.JustDown(keyS)){
//             //this.music.play();
//             this.music.stop();
//             this.scene.start("creatorScene");
//         }
//         } 
//     }
