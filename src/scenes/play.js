class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        //image for skeleton
        this.load.image('skeletonIdle', './assets/SkeletonRunner.png');
        this.load.image('skeletonrun', './assets/Skeletonrun.gif');

        //image for player.
        this.load.image('player', './assets/');

        //image for candy
        this.load.image('candy', './assets/HalloweenCandy.png');

        //image for skeleton movement
        this.load.spritesheet('skeleton_run', './assets/Skeleton_Sprite_Sheet.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9})

        //image for background

        
    }

    create(){

       


        
        // add skeleton with physics
        this.skeletonIdle = this.physics.add.sprite(gameOptions.playerStartPosition, game.Config.height / 2, "skeleton");
        this.skeletonIdle.setGravityY(gameOptions.PlayerGravity);

        //adding collider to skeleton
        //collider = this.physics.add.collider(this.player, this.platformGroup);
    
      // define keys
      // W is jump
      //keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      //A is move back
      //keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      // D is move right
      //keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      
      //Right Arrow key is move forward
      keyRIGHT = this.input.keyboard.addkey(Phaser.Input.KeyCodes.RIGHT);

      //space bar is jump
      keyJUMP = this.input.keyboard.addkey(Phaser.Input.KeyCodes.SPACE);

      // LEFT and RIGHT key is start the game.
      //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        //game start or restart.
        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.scene.start("menuScene");
        }

        if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.scene.start("menuScene");
        }


    }
}