import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';

export default class PuzzleTwo extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleTwo' })

     
    }
    
    create()
    {
       

      
       

        const title = new Label(this,100,100,"Puzzle Two");
        const nextButton = new Button(this,200,200,'Next Puzzle',"PuzzleThree");
  

          
    }
     
}