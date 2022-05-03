class Rule extends Phaser.Scene {
    constructor() {
        super("ruleScene");
    }


    preload() {
        // load music audio
        this.load.image('menucreator', './assets/intro1.png');
        //cat
        this.load.spritesheet('cat_run','./assets/cat_run.png',{frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7});
        //skeleton
        this.load.spritesheet('skeleton_run', './assets/Skeleton_Sprite_Sheet.png', {frameWidth: 128, frameHeight: 128, startFrame: 0, endFrame: 7})
    }

    create (){
        //place background
        this.background = this.add.tileSprite(0, 0, 1200, 700, 'menucreator').setOrigin(0.0);

        let titleConfig = {
            fontFamily: 'Pangolin',
            fontSize: '32px',
            color: '#ffa90a',
            align: 'right',
        }

        let text1Config = {
            fontFamily: 'Pangolin',
            fontSize: '28px',
            color: '#FFA500',
            align: 'right',
        }
        
        let creditConfig = {
            color: '#CD00CD',
            fontFamily: 'Pangolin',
            fontSize: '22px',
            stroke: '#FFFFFF', 
            strokeThickness: 3,
            align: 'left',
            fixedWidth: 0,
        } 

        //menu text UI
        let centerX = game.config.width / 2;
        let centerY = game.config.height / 2;

        //'Character will keep running until you are caught by the skeleton!'
        this.add.text(centerX, centerY -300, 'Le Cat is traversing through the forest at Halloween midnight.', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -250, 'Suddenly... a skeleton is chasing you. You seek shelter in a nearby house but it is haunted!', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -200, ' Your Goal is: Run! Run! Run!', titleConfig).setOrigin(0.5);

        this.add.image(centerX - 100, centerY - 100, 'skeleton_run').setOrigin(0.5);
        this.add.image(centerX + 100, centerY - 100, 'cat_run').setOrigin(0.5);

        this.add.text(centerX, centerY, 'Character will keep running until you are caught by the skeleton!', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY + 50, 'The Game score is determined by how long you have survived in seconds.', text1Config).setOrigin(0.5);
        text1Config.color = '#FFFFFF';
        this.add.text(centerX-50, centerY + 100, 'You Press Up arrow to jump AND hold the right arrow to move forward while jumping.', text1Config).setOrigin(0.5);
    
        //this.add.image(centerX - 160, 80, 'character').setScale(0.7).setOrigin(0.5);
        //type space to play
        this.add.text(centerX, centerY + 200, '[ Press (SPACE) to Return ]', creditConfig).setOrigin(0.5);
        
        //keyboard input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update (){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('menuScene');
        }
    }
}