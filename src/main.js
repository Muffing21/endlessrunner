//global game settings


let config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 700,
    physics: {
      default: "arcade"
    },
    
    scene: [ Menu, Play ]
    
  }

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Key A is move left.
//Key W is jump.
//Key D is move right.
let keySPACE, keyRULE, keyMENU;