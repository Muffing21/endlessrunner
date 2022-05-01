class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.gameOver = false;
        
    }

    preload(){
        
        
        //image for skeleton
        this.load.image('skeletonIdle', './assets/SkeletonRunner.png');
        this.load.image('skeletonrun', './assets/Skeletonrun.gif');

        //image for candy
        this.load.image('candy', './assets/HalloweenCandy.png');

         //image for background
        this.load.image('play_bg', './assets/playBackground.png');
        this.load.image('play_bg2', './assets/play_bg2.png');

        //jump sound
        


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
        this.load.spritesheet('cat_jump', './assets/cat_jump.png', {frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 5});

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
        //this.sceneTime = 20000;
       
        //bg music
        this.bgm = this.sound.add('bg_music', {mute: false, volume: 1.0, rate: 1, loop: true});
        this.bgm.play();

        // add tile sprite
        this.talltrees = this.add.tileSprite(0, 0, 1200, 700, 'play_bg').setOrigin(0,0);
        // put another tile sprite above the ground tiles
        this.groundScroll = this.add.tileSprite(0, game.config.height-tileSize, game.config.width, tileSize, 'groundScroll').setOrigin(0);

        this.sfx = this.sound.add('skeleton_laugh');
        this.sfx.play();


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

        var math_variable0= Phaser.Math.Between(-300, -600);
        this.block0 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block = this.physics.add.sprite(400, 635,"tool0").setScale(SCALE).setOrigin(0);
            Block.body.immovable =true ;
            Block.body.allowGravity = false;
            Block.body.setVelocityX(math_variable0);
            this.block0.add(Block);
        }

        var math_variable1= Phaser.Math.Between(-300, -600);
        this.block1 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block1 = this.physics.add.sprite(650, 545,"tool1").setScale(SCALE).setOrigin(0);
            Block1.body.immovable =true ;
            Block1.body.allowGravity = false;
            Block1.body.setVelocityX(math_variable1);
            this.block1.add(Block1);
        }
        
        var math_variable2= Phaser.Math.Between(-300, -600);
        this.block2 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block2 = this.physics.add.sprite(900, 570,"tool2").setScale(SCALE).setOrigin(0);
            Block2.body.immovable =true ;
            Block2.body.allowGravity = false;
            Block2.body.setVelocityX(math_variable2);
            this.block2.add(Block2);
        }

        this.math_variable3  = Phaser.Math.Between(-100, -1000);
        this.block3 = this.add.group();
        for (var i = 0; i <= 300; i++) {
            var Block3 = this.physics.add.sprite(1200, 570,"tool3").setScale(SCALE).setOrigin(0);
            Block3.body.immovable =true ;
            Block3.body.allowGravity = false;
            Block3.body.setVelocityX(this.math_variable3);
            this.block3.add(Block3);
        }

        this.skeleton_end = this.add.group();
        this.skeleton = this.physics.add.sprite(100, game.config.height/100-tileSize, 'skeleton_run').setScale(SCALE);
        this.skeleton_end.add(this.skeleton);
        
        

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

        this.anims.create({
            key: 'cat_jump',
            frames: this.anims.generateFrameNumbers('cat_jump',{frames: [0, 1, 2, 3, 4, 5]}),
            frameRate: 6,
            repeat: 0
        });
        
        // set up my cat son
        this.cat = this.physics.add.sprite(800, game.config.height/2-tileSize, 'cat_run').setScale(SCALE);
        this.cat.anims.play('cat_run');
        
        this.skeleton.anims.play('skeleton_run');
        //this.skeleton = this.physics.add.sprite(120, game.config.height/2-tileSize, 'skeleton_run').setScale(SCALE);
        this.catCollide = this.add.group();
        this.catCollide.add(this.cat);

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

        
        this.physics.add.collider(this.cat, this.block0);
        this.physics.add.collider(this.cat, this.block1);
        this.physics.add.collider(this.cat, this.block2);
        this.physics.add.collider(this.cat, this.block3);
        this.physics.add.collider(this.cat, this.skeleton_end);

        let scoreConfig = {
            fontFamily: 'serif',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
            fixedWidth: 200
        }
        
        this.gameOver = false;
        this.changeScene = false;
        this.playerTime = 0;

        this.timeLeft = this.add.text(borderPadding + borderUISize*10, borderUISize + borderPadding, this.playerTime, scoreConfig);
        
        // jump sound
        this.jump_music = this.sound.add('jump_sound', {mute: false, volume: 0.2, rate: 1, loop: false});

        // if(this.timeScene1 <= 0){
        //     this.clock = this.time.delayedCall(this.p1Time, () => {
        //         // 45-second play clock
        //         game.settings.gameTimer
        //         scoreConfig.fixedWidth = 0;
        //     }, null, this);    
        // }


        // set up Scene switcher
        //this.input.keyboard.on('keydown', sceneSwitcher);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(time, delta) {

        let scoreConfig = {
            fontFamily: 'serif',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 10,
                bottom: 10,
            },
            //fixedWidth: 
        }
        
        this.math_variable3 = Phaser.Math.Between(-100, -1000);

        //this.sceneTime -= delta;
        this.playerTime += delta;
        this.timeLeft.text = (this.playerTime/1000).toFixed(2);        
        // if(this.sceneTime % 10000 == 0){
        //     this.changeScene == true;
        //     console.log(changeScene);
        // }
        // console.log(sceneTime);

        // if(this.timeScene % 10000 == 0 && this.changeScene == true){
        //     this.talltrees.setTexture('play_bg2');
        // }
        
        // update tile sprites (tweak for more "speed")
        this.talltrees.tilePositionX += this.SCROLL_SPEED;
        this.groundScroll.tilePositionX += this.SCROLL_SPEED;

		// check if cat is grounded
	    this.cat.isGrounded = this.cat.body.touching.down;
        this.skeleton.isGrounded = this.skeleton.body.touching.down;

        //time change scene implementation
        // if(this.timeScene1 > 0){
        //     this.timeScene1 -= delta;
        // }
        // else{
        //     this.changeScene = true;
        // }

        // if(this.changeScene == true){
        //     this.talltrees = this.add.tileSprite(0, 0, 1200, 700, 'play_bg').setOrigin(0,0);
        // }

	    // movement left right for player 
        // if(cursors.left.isDown) {
        //     this.cat.setVelocityX(-350);
        //     // Animation and arrow key tinting
        //     this.cat.setFlip(true, false);
        //     this.cat.anims.play('cat_run',true);
        //     this.leftKey.tint = 0xFACADE;   // tint key
        // } else if(cursors.right.isDown) {
        //     this.cat.setVelocityX(350);
        //     // Animation and arrow key tinting
        //     this.cat.resetFlip();
        //     //this.cat.anims.play('cat_run',true);
        //     this.rightKey.tint = 0xFACADE;  // tint key
        // }else {
        //     // Set alien velocity to zero here (.setVelocityX())
        //     this.cat.setVelocityX(0);

        //     // Animation and arrow key tinting
        //     this.leftKey.tint = 0xFFFFFF;   // un-tint keys
        //     this.rightKey.tint = 0xFFFFFF;  
        // }

        // add cat world wrap line here
        this.physics.world.wrap(this.cat, 0);
        this.physics.world.wrap(this.skeleton, 0);



        ////////////////////////////////////////////////////////
        // the jump
	    if(this.cat.isGrounded || this.skeleton.isGrounded && this.gameOver == false) {
            // this.cat.anims.play('cat_run',true);
	    	this.jumps = this.MAX_JUMPS;
	    	this.jumping = false;
            this.cat.anims.play('cat_run',true);
	    } else {
	    	this.cat.anims.play('cat_jump', true);
            
            //this.skeleton.anims.play('jump');
	    }
        // allow steady velocity change up to a certain key down duration
	    if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150) && this.gameOver == false) {
	        if(cursors.right.isDown){
                this.cat.setVelocityX(15);
            }
            this.cat.body.velocity.y = this.JUMP_VELOCITY;
            this.skeleton.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;
	        this.upKey.tint = 0xFACADE;
            
            this.jump_music.play();
            
	    } else {
	    	this.upKey.tint = 0xFFFFFF;
	    }
        // finally, letting go of the UP key subtracts a jump
	    if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up) && this.gameOver == false) {
	    	this.jumps--;
	    	this.jumping = false;
	    }
        if(this.physics.overlap(this.cat, this.skeleton_end)){
            
        }    

        if(this.physics.overlap(this.cat, this.skeleton_end)){
            this.gameOver == true;
        }

        if(this.physics.overlap(this.cat, this.skeleton_end) || this.gameOver == true){            
            
            this.block0.clear();
            this.block1.clear();
            this.block2.clear();
            this.block3.clear();
            this.sfx.play();
            // this.cat.destroy();
            // this.skeleton.destroy();
             this.playerTime = 0;
             //this.timeLeft = this.add.text(borderPadding + borderUISize*10, borderUISize + borderPadding, this.playerTime, scoreConfig);
            this.bgm.stop();
            this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
            this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press SPACE to restart', scoreConfig).setOrigin(0.5);
        }

       
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.bgm.stop();
            this.scene.restart();
        }
        

        

        //make the broke is loop
        this.physics.world.wrap(this.block0, 0);
        this.physics.world.wrap(this.block1, 0);
        this.physics.world.wrap(this.block2, 0);
        this.physics.world.wrap(this.block3, 0);

    }
}


