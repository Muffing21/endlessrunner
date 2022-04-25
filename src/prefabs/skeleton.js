// Rocket prefab
class skeleton extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isWalking = false;      // track rocket's firing status
        this.moveSpeed = 8;         // pixels per frame
        //this.sfxRocket = scene.sound.add('sfx_rocket')  // add rocket sfx
        this.moveSpeed2 = 1.25;
        
    }

    update() {
        // left/right movement
        // let fireConfig = {
        //     fontFamily: 'Times',
        //     fontSize: '40px',
        //     //backgroundColor: '#F3B141',
        //     color: '#FF0000',
        //     align: 'right',
        //     padding: {
        //         top: 5,
        //         bottom: 5,
        //     },
        //     fixedWidth: 100
        // }

        if(!this.isWalking) {
            if(keyRIGHT.isDown && this.x <= borderUISize + this.width) {
                this.x += this.moveSpeed;
            } //else if (keyD.isDown && this.x >= game.config.width - borderUISize - this.width) {  // this line of code will let you walk left but Im thinking we dont need it
                //this.x -= this.moveSpeed;
            //}
        }

        // fire button
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.isWalking) {
            this.isWalking = true;
            //this.sfxRocket.play();
        }
        // if Space pressed, move up, add physics later
        if(this.isWalking && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
          //  this.fireMsg = this.add.text(borderPadding + borderUISize, borderUISize + borderPadding, 'FIRE', fireConfig);
            if(keyRIGHT.isDown && this.x >= borderUISize + this.width) {              //with this you are allowed to move mid air
                this.x -= this.moveSpeed2;
            }
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isWalking = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}