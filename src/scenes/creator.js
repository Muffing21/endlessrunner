class Creator extends Phaser.Scene {
    constructor() {
        super("creatorScene");
    }

    preload() {
        // load music audio
        this.load.image('menucreator', './assets/intro1.png');
    }

    create(){
        //place background
        this.background = this.add.tileSprite(0, 0, 1200, 700, 'menucreator').setOrigin(0.0);
        //UI and text
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

        //add credits
        this.add.text(centerX, centerY-300, 'Our Group members:', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY-250, 'ZhiBin Huang, Amanda Bahadori, Yunhan Wei, Wichapas Pichetpongsa', text1Config).setOrigin(0.5);

        this.add.text(centerX, centerY/3+90, 'Code Programmer:', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY/3+130, 'ZhiBin Huang,  Wichapas Pichetpongsa', text1Config).setOrigin(0.5);

        // this.add.text(centerX, centerY-40, 'Sound Effect:', titleConfig).setOrigin(0.5);
        // this.add.text(centerX, centerY, 'Yunhan Wei', text1Config).setOrigin(0.5);

        this.add.text(centerX, centerY+45, 'Game Art:', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+85, 'Amanda Bahadori', text1Config).setOrigin(0.5);

        this.add.text(centerX, centerY+130, 'Music and SFX:', titleConfig).setOrigin(0.5);
        this.add.text(centerX, centerY+170, 'Yunhan Wei', text1Config).setOrigin(0.5);
        
        //type space to play
        this.add.text(centerX, centerY+210, '[ Press (SPACE) to Return ]', creditConfig).setOrigin(0.5);
        //keyboard input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start("menuScene");
        }
    }

    
}