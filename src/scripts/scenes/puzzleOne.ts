import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';

export default class PuzzleOne extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleOne' })

     
    }
    
    create()
    {
       

      
       

        const title = new Label(this,100,100,"Puzzle One");
        const nextButton = new Button(this,200,200,'Next Puzzle',"PuzzleTwo");
  

          
    }
     
}