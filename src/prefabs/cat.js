class Cat extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add to existing, displayList, updateList
        this.isWalking = false;      // track rocket's firing status
        this.moveSpeed = 8;         // pixels per frame
        this.moveSpeed2 = 1.25;
        
    }

    update() {
        
        if(!this.isWalking) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        // Jump Button
        if(Phaser.Input.Keyboard.JustDown(keySPACE) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
          //  this.fireMsg = this.add.text(borderPadding + borderUISize, borderUISize + borderPadding, 'FIRE', fireConfig);
            if(keyA.isDown && this.x >= borderUISize + this.width) {              //with this you are allowed to move mid fire
                this.x -= this.moveSpeed2;
            }
            else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed2;
            }
        }
        // reset on miss
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }

    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}