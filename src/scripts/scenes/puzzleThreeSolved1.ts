import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleThreeSolved1 extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleThreeSolved1' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"You have solved another puzzle!.");
        const nextButton = new Button(this,550,340,'Next',"PuzzleThreeSolved2");

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleThree");

  
        const content = [
          'You have found a Martian figurine. You need to take note of the',
          'color of their eyes, horns and body.',
           'You will need that information later in the game.'

        ];

     
        
        
        const martianOne = this.add.image(700,400, 'martianFour');

        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);
      }
      
      
     
}