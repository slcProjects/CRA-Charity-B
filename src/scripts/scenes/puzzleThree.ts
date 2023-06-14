import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';

export default class PuzzleThree extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleThree' })

     
    }
    
    create()
    {
       

      
       

        const title = new Label(this,100,100,"Puzzle Three");
        const nextButton = new Button(this,200,200,'Next Puzzle',"PuzzleFour");
  

          
    }
     
}