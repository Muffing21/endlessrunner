let config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 860,
    physics: {
      default: "arcade"
    },
    
    scene: [ menu, play ]
    
  }

//global game settings
let gameSettings = {
    platformSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 900,
    jumpForce: 400,
    playerStartPosition: 200,
    jumps: 2
}


let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Key A is move left.
//Key W is jump.
//Key D is move right.
let keyA, keyW, keyD, keyLEFT, keyRIGHT, keySPACE;