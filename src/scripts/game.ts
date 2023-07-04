import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import Instructions from './scenes/instructions'
import Story from './scenes/story'
import PuzzleOne from './scenes/puzzleOne'
import PuzzleTwo from './scenes/puzzleTwo'
import PuzzleThree from './scenes/puzzleThree'
import PuzzleFour from './scenes/puzzleFour'








const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  dom: {
    createContainer: true
},
  scene: [PreloadScene, MainScene,Instructions,Story,PuzzleOne,PuzzleTwo,PuzzleThree,PuzzleFour],
  userName: "guest",
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
  
}

window.addEventListener('load', () => {
  window.userName = "guest";
  window.puzzOneVarOne = 0;
  window.puzzOneVarTwo = 0;
  window.puzzOneVarThree = 0;

  const game = new Phaser.Game(config)

})
declare global {
  interface Window {
    userName: string ;
    puzzOneVarOne: integer;
    puzzOneVarTwo: integer;
    puzzOneVarThree: integer;
    hintButton: ConstantSourceNode;
  }
}





