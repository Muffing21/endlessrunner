//global game settings


let config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 700,
    physics: {
      default: "arcade"
    },
    
    scene: [ Menu, Play, Creator, Rule ]
    
  }

  //global variable
// global variables
let cursors;
let currentScene = 0;
const SCALE = 0.5;
const tileSize = 35;

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//Key SPACE is start the game.
let keySPACE, keyRULE, keyMENU, keyRIGHT, keyLEFT, keyS, KeyW;
