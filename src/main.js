//In main.js (or equivalent), include a header with collaborator names, game title, date completed, and your creative tilt justification (see below) (5)
/*
Wichapas Pichetpongsa
Amanda Bahadori
Yunhan Wei
Zhibin Huang

5/3/2022

The game takes a more of interesting in terms of aesthetics rather than mechanics. Although the mechanic is simple, it's essentially what endless runner is about.
What I liked about this game the most is how you almost have like a second stage once the timer hits 20 seconds. Scene is changed, and new obstacles appears. The obstacles are
changed to fit the theme of the scene and this game follows a narrative with our theme in mind. The programming part that I enjoyed is managing the groups and changing the scene
when 20 seconds has passed. With the addition of the skeleton, it creates a sense of danger and mirrors the movement of your character. We had a hard time coding this so
we went beyond our abilities to try to get this game to work.

This game has a great visual style and I'd say we accomplished with the theme we were going for. Halloween, creepy, and cute is essentially what makes the world of our game immersive.
The music also adds another layer of spookiness in the main menu but once the game starts you can feel the intensity increasing with a different bgm playing. This game is the
embodiment of cute spookiness!
*/

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
let keySPACE, keyRULE, keyMENU, keyRIGHT, keyLEFT, keyS, KeyW, keyQ;
