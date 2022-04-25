class Rule extends Phaser.Scene {
    constructor() {
        super("ruleScene");
    }


    preload (){
    
    }

    create (){

        let ruleConfig = {
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

        this.add.text(game.config.width/2, game.config.height/2, 'Character will keep running until you are caught by the skeleton!', ruleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use SPACEBAR to jump', ruleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Press SPACEBAR to Play', ruleConfig).setOrigin(0.5);
        
        
        //keyboard input
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }


    update (){

        if (Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene');
        }
    
    }


}