import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';

export default class PuzzleFour extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleFour' })

     
    }
    
    create()
    {
       

      
       

        const title = new Label(this,100,100,"Puzzle Four");
        const nextButton = new Button(this,200,200,'Next Puzzle',"PuzzleFive");
  

          
    }
     
}