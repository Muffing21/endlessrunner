let gameOptions = {
    platformSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 900,
    jumpForce: 400,
    playerStartPosition: 200,
    jumps: 2
}

class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.gameOver = false;
        
    }

    preload(){
        //image for skeleton
        this.load.image('skeletonIdle', './assets/SkeletonRunner.png');
        this.load.image('skeletonrun', './assets/Skeletonrun.gif');

        //image for player.
        this.load.image('player', './assets/');

        //image for candy
        this.load.image('candy', './assets/HalloweenCandy.png');

         //image for background
        this.load.image('play_bg', './assets/playBackground.png');

        //image for skeleton movement
        this.load.spritesheet('skeleton_run', './assets/Skeleton_Sprite_Sheet.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9})

        //image for cat
        this.load.image('catIdle', './assets/cat.png');

        //image for platform
        this.load.image('platform', './assets/platform.png');

       

        
    }

    create(){

        


        // place tile sprite
        this.forest = this.add.tileSprite(0, 0, 1200, 700, 'play_bg').setOrigin(0,0);

        this.groundIG = this.add.rectangle(0, game.config.height - borderUISize*2, game.config.width, borderUISize, 0xFF0000).setOrigin(0 ,0);//bottom rectangle
        
        // group of all active platforms
        /*
        this.platformGroup = this.add.group({
            removeCallback: function(platform){
                platform.scene.platformPool.add(platform)
            }
        });

        this.platformPool = this.add.group({
            removeCallback: function(platform){                   //once a platform is removed from the pool, its added to the active platform group
                platform.scene.platformGroup.add(platform);
            }
        });
        */

        //will contain the ground for us to stand on or collide with
        platforms = this.physics.add.group();

        var ground = platforms.create(0, game.config.height - borderUISize*2, groundIG);

        //ground.scale.setTo(2, 2);

        ground.body.immovable = true;



        this.playerJumps = 0;

        this.addPlatform(game.config.width, game.config.width/2);
        
        // add skeleton with physics
        this.catIdle = this.physics.add.sprite(gameOptions.playerStartPosition, config.height - (borderUISize*2)+5, "catIdle").setOrigin(0, 0);
        //this.catIdle.setGravityY(gameOptions.PlayerGravity);

        //adding collider to cat
        this.physics.add.collider(this.catIdle, platforms);

          //space bar is jump
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyMENU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        
        //check for input
        this.input.on("SPACE", this.jump, this);
    
      

    

        // platforms are added from the pool

        //borrowed code from Emanuele Feronato
        

    }

    /*
    addPlatform(platformWidth, posX) {
        let platform;
        if(this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove(platform);
        }
        else{
            platform = this.physics.add.sprite(posX, game.config.height * 0.8, "platform");
            platform.setImmovable(true);
            platform.setVelocityX(gameOptions.platformStartSpeed * -1);
            this.platformGroup.add(platform);    
        }
        platform.displayWidth = platformWidth;
        this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
        
    }
    
    jump(){
        if(this.catIdle.body.touching.down || (this.catIdle > 0 && this.playerJumps < gameOptions.jumps)){
            if(this.catIdle.body.touching.down){
                this.playerJumps = 0;
            }
            this.playerJumps.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps++;
        }
    }

    */

    update(){
        


        if(this.catIdle.y > game.config.height){
            gameOver = true;
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press SPACEBAR to Restart or Q to Menu', scoreConfig).setOrigin(0.5);
        }
        
        this.catIdle.x = gameOptions.playerStartPosition;

        /*
        let minDistance = game.config.width;
        this.platformGroup.getChildren().forEach(function(platform){
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            minDistance = Math.min(minDistance, platformDistance);
            if(platform.x < - platform.displayWidth / 2){
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        }, this);
        */

        //add new platforms

        if(minDistance > this.nextPlatformDistance){
            var nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
            this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2);
        }
        
        // moves the tile sprite
        this.starfield.tilePositionX -= 4;

        //game start or restart.
        if(this.gameOver == true && Phaser.Input.Keyboard.JustDown(keyMENU)) {
            this.scene.start("menuScene");
        }

        if(this.gameOver == true && Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.scene.start("playScene");
        }


    }
}