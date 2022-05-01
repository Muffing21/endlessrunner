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
            fontSize: '24px',
            color: '#98fb98',
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
        this.add.text(centerX, centerY -300, 'You went to a house on a forest during the Halloween', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -250, 'You saw a Big Skeleton is following at You!', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY -200, 'Your Goal is: Run! Run! Run!', titleConfig).setOrigin(0.5);

        this.add.image(centerX - 100, centerY - 100, 'skeleton_run').setOrigin(0.5);
        this.add.image(centerX + 100, centerY - 100, 'cat_run').setOrigin(0.5);

        this.add.text(centerX, centerY, 'Character will keep running until you are caught by the skeleton!', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY + 50, 'The Game offer a Timer inside the yellow block.', text1Config).setOrigin(0.5);
        this.add.text(centerX, centerY + 100, 'You Just need to Press Up key to jump', text1Config).setOrigin(0.5);
    
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