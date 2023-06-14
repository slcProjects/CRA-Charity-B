import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';

export default class PuzzleFour extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleFour' })

     
    }
    
    create()
    {
       

      
       

        const title = new Label(this,100,100,"Puzzle Four");
        const nextButton = new Button(this,200,200,'Finish',"MainScene");
  

          
    }
     
}