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

        //image for block
        this.load.image('tool0', './assets/tool0.png');

        //image for block1
        this.load.image('tool1', './assets/tool1.png');

        //image for block2
        this.load.image('tool2', './assets/tool2.png');

        //image for block3
        this.load.image('tool3', './assets/tool3.png');

        //image for skeleton movement
        this.load.spritesheet('skeleton_run', './assets/Skeleton_Sprite_Sheet.png', {frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7})


        //image for cat
        this.load.image('catIdle', './assets/cat.png');
        this.load.spritesheet('cat_run','./assets/cat_run.png',{frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7});

        //image for platform
        this.load.image('platform', './assets/platform.png');

        this.load.path = 'assets/';
        // take care of all of our asset loading now
        //this.load.atlas('platformer_atlas', 'kenny_sheet.png', 'kenny_sheet.json');
        this.load.image('arrowKey', 'arrowKey.png');
        this.load.image('groundScroll', 'ground1.png');
        
        //this.load.atlasXML('shooter_atlas', 'shooter_sheet.png', 'shooter_sheet.xml');
    }

    create() {
        // variables and settings
        this.JUMP_VELOCITY = -700;
        this.MAX_JUMPS = 2;
        this.SCROLL_SPEED = 4;
        currentScene = 3;
        this.physics.world.gravity.y = 2600;

        // add tile sprite
        this.talltrees = this.add.tileSprite(0, 0, 1200, 700, 'play_bg').setOrigin(0,0);
        // put another tile sprite above the ground tiles
        this.groundScroll = this.add.tileSprite(0, game.config.height-tileSize, game.config.width, tileSize, 'groundScroll').setOrigin(0);


        // make ground tiles group
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize,'groundScroll' ).setScale(SCALE).setOrigin(0);
            groundTile.body.immovable = true ;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }

        //second ground
        // for(let i = tileSize*2; i < game.config.width-tileSize*13; i += tileSize) {
        //     let groundTile = this.physics.add.sprite(i, game.config.height - tileSize*9, 'groundScroll').setScale(SCALE).setOrigin(0);
        //     groundTile.body.immovable = true;
        //     groundTile.body.allowGravity = false;
        //     this.ground.add(groundTile);
        // }

        // make block.
        this.block0 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block = this.physics.add.sprite(400, 635,"tool0").setScale(SCALE).setOrigin(0);
            Block.body.immovable =true ;
            Block.body.allowGravity = false;
            Block.body.setVelocityX(-100);
            this.block0.add(Block);
        }

        this.block1 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block1 = this.physics.add.sprite(650, 545,"tool1").setScale(SCALE).setOrigin(0);
            Block1.body.immovable =true ;
            Block1.body.allowGravity = false;
            Block1.body.setVelocityX(-100);
            this.block1.add(Block1);
        }
        
        this.block2 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block2 = this.physics.add.sprite(900, 570,"tool2").setScale(SCALE).setOrigin(0);
            Block2.body.immovable =true ;
            Block2.body.allowGravity = false;
            Block2.body.setVelocityX(-100);
            this.block2.add(Block2);
        }

        this.block3 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block3 = this.physics.add.sprite(1200, 570,"tool3").setScale(SCALE).setOrigin(0);
            Block3.body.immovable =true ;
            Block3.body.allowGravity = false;
            Block3.body.setVelocityX(-100);
            this.block3.add(Block3);
        }
 
        this.anims.create({
            key: 'cat_run',
            
            frames: this.anims.generateFrameNumbers('cat_run',{frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'skeleton_run',
            frames: this.anims.generateFrameNumbers('skeleton_run',{frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
            frameRate: 16,
            repeat: -1
        });
        
        // set up my cat son
        this.cat = this.physics.add.sprite(300, game.config.height/2-tileSize, 'cat_run').setScale(SCALE);
        this.cat.anims.play('cat_run');
        this.skeleton = this.physics.add.sprite(100, game.config.height/100-tileSize, 'skeleton_run').setScale(SCALE);
        this.skeleton.anims.play('skeleton_run');
        //this.skeleton = this.physics.add.sprite(120, game.config.height/2-tileSize, 'skeleton_run').setScale(SCALE);

        // add arrow key graphics as UI
        this.upKey = this.add.sprite(64, 32, 'arrowKey');
		this.leftKey = this.add.sprite(32, 64, 'arrowKey');
		this.downKey = this.add.sprite(64, 64, 'arrowKey');
		this.rightKey = this.add.sprite(96, 64, 'arrowKey');
		this.leftKey.rotation = Math.PI/2*3;
		this.downKey.rotation = Math.PI;
        this.rightKey.rotation = Math.PI/2;
        this.leftKey.tint = 0x333333;
        this.downKey.tint = 0x333333;
        this.rightKey.tint = 0x333333;

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();

        // add physics collider
        this.physics.add.collider(this.cat, this.ground);
        this.physics.add.collider(this.skeleton, this.ground);

        // set up Scene switcher
        //this.input.keyboard.on('keydown', sceneSwitcher);
    }

    update() {
        // update tile sprites (tweak for more "speed")
        this.talltrees.tilePositionX += this.SCROLL_SPEED;
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;

		// check if cat is grounded
	    this.cat.isGrounded = this.cat.body.touching.down;
        this.skeleton.isGrounded = this.skeleton.body.touching.down;

	    // movement left right for player 
        if(cursors.left.isDown) {
            this.cat.setVelocityX(-350);
            // Animation and arrow key tinting
            this.cat.setFlip(true, false);
            //this.cat.anims.play('cat_run',true);
            this.leftKey.tint = 0xFACADE;   // tint key
        } else if(cursors.right.isDown) {
            this.cat.setVelocityX(350);
            // Animation and arrow key tinting
            this.cat.resetFlip();
            //this.cat.anims.play('cat_run',true);
            this.rightKey.tint = 0xFACADE;  // tint key
        }else {
            // Set alien velocity to zero here (.setVelocityX())
            this.cat.setVelocityX(0);

            // Animation and arrow key tinting
            this.leftKey.tint = 0xFFFFFF;   // un-tint keys
            this.rightKey.tint = 0xFFFFFF;  
        }

        // add cat world wrap line here
        this.physics.world.wrap(this.cat, 0);



        ////////////////////////////////////////////////////////
        // the jump
	    if(this.cat.isGrounded || this.skeleton.isGrounded) {
            // this.cat.anims.play('cat_run',true);
	    	this.jumps = this.MAX_JUMPS;
	    	this.jumping = false;
	    } else {
	    	this.cat.anims.play('jump');
            this.skeleton.anims.play('jump');
	    }
        // allow steady velocity change up to a certain key down duration
	    if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
	        this.cat.body.velocity.y = this.JUMP_VELOCITY;
            this.skeleton.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;
	        this.upKey.tint = 0xFACADE;
	    } else {
	    	this.upKey.tint = 0xFFFFFF;
	    }
        // finally, letting go of the UP key subtracts a jump
	    if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
	    	this.jumps--;
	    	this.jumping = false;
	    }

        //make the broke is loop
        this.physics.world.wrap(this.block0, 0);
        this.physics.world.wrap(this.block1, 0);
        this.physics.world.wrap(this.block2, 0);
        this.physics.world.wrap(this.block3, 0);

    }
}


///////////////////////////////////////////////
// let gameOptions = {
//     platformSpeed: 350,
//     spawnRange: [100, 350],
//     platformSizeRange: [50, 250],
//     playerGravity: 900,
//     jumpForce: 400,
//     playerStartPosition: 200,
//     jumps: 2
// }

// class Play extends Phaser.Scene {
//     constructor() {
//         super("playScene");
//         this.gameOver = false;
        
//     }

//     preload(){
//         //image for skeleton
//         this.load.image('skeletonIdle', './assets/SkeletonRunner.png');
//         this.load.image('skeletonrun', './assets/Skeletonrun.gif');

//         //image for player.
//         this.load.image('player', './assets/');

//         //image for candy
//         this.load.image('candy', './assets/HalloweenCandy.png');

//          //image for background
//         this.load.image('play_bg', './assets/playBackground.png');

//         //image for skeleton movement
//         this.load.spritesheet('skeleton_run', './assets/Skeleton_Sprite_Sheet.png', {frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7})


//         //image for cat
//         this.load.image('catIdle', './assets/cat.png');
//         this.load.spritesheet('cat_run','./assets/cat_run.png',{frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7});

//         //image for platform
//         this.load.image('platform', './assets/platform.png');

//         this.load.path = 'assets/';
//         // take care of all of our asset loading now
//         this.load.atlas('platformer_atlas', 'kenny_sheet.png', 'kenny_sheet.json');
//         this.load.image('arrowKey', 'arrowKey.png');
//         this.load.image('talltrees', 'talltrees.png');
//         this.load.image('groundScroll', 'ground.png');
        
//         this.load.atlasXML('shooter_atlas', 'shooter_sheet.png', 'shooter_sheet.xml');

        

//     }

//     create(){

//         //declare animations
//         this.anims.create({
//             key: 'cat_run',
            
//             frames: this.anims.generateFrameNumbers('cat_run',{frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
//             frameRate: 16,
//             repeat: -1
//         });

//         this.anims.create({
//             key: 'skeleton_run',
//             frames: this.anims.generateFrameNumbers('skeleton_run',{frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
//             frameRate: 16,
//             repeat: -1
//         });
        

//         // place tile sprite
//         this.forest = this.add.tileSprite(0, 0, 1200, 700, 'play_bg').setOrigin(0,0);

//         // this.groundIG = this.add.rectangle(0, game.config.height - borderUISize*2, game.config.width, borderUISize, 0xFF0000).setOrigin(0 ,0);//bottom rectangle
        
//         // group of all active platforms
//         this.platformGroup = this.add.group({
//             removeCallback: function(platform){
//                 platform.scene.platformPool.add(platform)
//             }
//         });

//         this.platformPool = this.add.group({
//             removeCallback: function(platform){                   //once a platform is removed from the pool, its added to the active platform group
//                 platform.scene.platformGroup.add(platform);
//             }
//         });


//         //will contain the ground for us to stand on or collide with
//         // this.platforms = this.physics.add.group();
//         this.ground = this.add.group();
//         for(let i = 0; i < game.config.width; i += tileSize) {
//             let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'platformer_atlas', 'block').setScale(SCALE).setOrigin(0);
//             groundTile.body.immovable = true;
//             groundTile.body.allowGravity = false;
//             this.ground.add(groundTile);
//         }


//         //set up my son
//         this.cat = this.physics.add.sprite(game.config.width/2, game.config.height - borderUISize - borderPadding, 'cat_run').setScale(SCALE);
//         this.cat.body.setGravity(0, 300)
        
//         //set up skeleton chasing you
//         this.skeleton = this.physics.add.sprite(game.config.width/20, game.config.height - borderUISize - borderPadding, 'skeleton_run').setScale(SCALE);
        


//         //var ground = platforms.create(0, game.config.height - borderUISize*2, groundIG);

//         //ground.scale.setTo(2, 2);

//         //ground.body.immovable = true;



//         //this.playerJumps = 0;

//         //this.addPlatform(game.config.width, game.config.width/2);
        
//         // add skeleton with physics
//         //this.catIdle = this.physics.add.sprite(gameOptions.playerStartPosition, config.height - (borderUISize*2)+5, "catIdle").setOrigin(0, 0);
//         //this.catIdle.setGravityY(gameOptions.PlayerGravity);

//         //adding collider to cat
//         //this.physics.add.collider(this.catIdle, platforms);

//           //space bar is jump
//         //keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
//         //keyMENU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
//         //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
//         //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
//         this.cursors = this.input.keyboard.createCursorKeys();

        
//         //check for input
//         //this.input.on("SPACE", this.jump, this);
//         this.animStarted = false;
      
//        this.skeleton.anims.play('skeleton_run');
        
//        this.cat.anims.play('cat_run');
    

//         // platforms are added from the pool

//         //borrowed code from Emanuele Feronato
        
//         this.cat.setDrag(5000);
//     }

//     // addPlatform(platformWidth, posX) {
//     //     let platform;
//     //     if(this.platformPool.getLength()){
//     //         platform = this.platformPool.getFirst();
//     //         platform.x = posX;
//     //         platform.active = true;
//     //         platform.visible = true;
//     //         this.platformPool.remove(platform);
//     //     }
//     //     else{
//     //         platform = this.physics.add.sprite(posX, game.config.height * 0.8, "platform");
//     //         platform.setImmovable(true);
//     //         platform.setVelocityX(gameOptions.platformStartSpeed * -1);
//     //         this.platformGroup.add(platform);    
//     //     }
//     //     platform.displayWidth = platformWidth;
//     //     this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
        
//     // }
    
//     // jump(){
//     //     if(this.catIdle.body.touching.down || (this.catIdle > 0 && this.playerJumps < gameOptions.jumps)){
//     //         if(this.catIdle.body.touching.down){
//     //             this.playerJumps = 0;
//     //         }
//     //         this.playerJumps.setVelocityY(gameOptions.jumpForce * -1);
//     //         this.playerJumps++;
//     //     }
//     // }

//     update(){
        

//         if(this.cursors.right.isDown){
//             this.cat.setAccelerationX(200)
//         }
//         if(this.cursors.left.isDown){
//             this.cat.setAccelerationX(-200);
//         }

        
//         if(this.cat.y > game.config.height){
//             gameOver = true;
//             this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
//             this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press SPACEBAR to Restart or Q to Menu', scoreConfig).setOrigin(0.5);
//         }
        
//         //this.cat.x = gameOptions.playerStartPosition;

//         /*
//         let minDistance = game.config.width;
//         this.platformGroup.getChildren().forEach(function(platform){
//             let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
//             minDistance = Math.min(minDistance, platformDistance);
//             if(platform.x < - platform.displayWidth / 2){
//                 this.platformGroup.killAndHide(platform);
//                 this.platformGroup.remove(platform);
//             }
//         }, this);
//         */

//         //add new platforms

//         // if(minDistance > this.nextPlatformDistance){
//         //     var nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
//         //     this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2);
//         // }
        
//         // moves the tile sprite
//         this.forest.tilePositionX += 6;

//         //game start or restart.
//         if(this.gameOver == true && Phaser.Input.Keyboard.JustDown(keyMENU)) {
//             this.scene.start("menuScene");
//         }

//         if(this.gameOver == true && Phaser.Input.Keyboard.JustDown(keySPACE)) {
//             this.scene.start("playScene");
//         }


//     }

    
// }
