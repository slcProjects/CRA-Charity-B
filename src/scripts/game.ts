import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import Instructions from './scenes/instructions'
import Gifts from './scenes/gifts'
import GiftsTwo from './scenes/giftsTwo'


import Story from './scenes/story'
import PuzzleOne from './scenes/puzzleOne'
import PuzzleOneSolved from './scenes/puzzleOneSolved'
import PuzzleTwo from './scenes/puzzleTwo'
import PuzzleThree from './scenes/puzzleThree'
import PuzzleFour from './scenes/puzzleFour'
import PuzzleFive from './scenes/puzzleFive' 
import PuzzleSix from './scenes/puzzleSix' 
import Inventory from './scenes/inventory'
import Finish from './scenes/finish'

import PuzzleTwoSolved1 from './scenes/puzzleTwoSolved1'
import PuzzleTwoSolved2 from './scenes/puzzleTwoSolved2'
import PuzzleTwoSolved3 from './scenes/puzzleTwoSolved3'

import PuzzleThreeSolved1 from './scenes/puzzleThreeSolved1'
import PuzzleThreeSolved2 from './scenes/puzzleThreeSolved2'

import PuzzleFourSolved1 from './scenes/puzzleFourSolved1'











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
  scene: [PreloadScene, MainScene,Instructions,Story,PuzzleOne,PuzzleOneSolved,PuzzleTwo,PuzzleThree,PuzzleFour,PuzzleFive,PuzzleSix,
          Inventory,PuzzleTwoSolved1,PuzzleTwoSolved2,PuzzleTwoSolved3,PuzzleThreeSolved1,PuzzleThreeSolved2,PuzzleFourSolved1,Finish, Gifts,GiftsTwo],
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
  window.puzzOneSolved = false;
  window.puzzTwoSolved = false;
  window.puzzThreeSolved = false;
  window.puzzFourSolved = false; 
  window.puzzFiveSolved = false; 
  window.puzzSixSolved = false; 
  window.currentTime = new Date();
  window.startTime = 0;
  window.endTime = 0;


  const game = new Phaser.Game(config)

})
declare global {
  interface Window {
    userName: string;
    puzzOneSolved: boolean;
    puzzTwoSolved: boolean;
    puzzThreeSolved: boolean;
    puzzFourSolved: boolean;
    puzzFiveSolved: boolean;
    puzzSixSolved: boolean;
    hintButton: ConstantSourceNode;

    currentTime:Date;
    startTime: integer;
    endTime: integer;
  }
}





