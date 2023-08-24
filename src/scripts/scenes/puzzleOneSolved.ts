import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleOneSolved extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleOneSolved' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"You have opened another puzzle");
        const nextButton = new Button(this,550,340,'Next Puzzle',"PuzzleTwo");

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleOne");

  
        const content = [
          'You have found two Martian figurines. You need to take note of the',
          'color of their eyes, horns and body.',
           'You will need that information later in the game.'

        ];

     
        
        
        const martianOne = this.add.image(700,400, 'martianOne');
        const martianTwo = this.add.image(300,400, 'martianTwo');

        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);
      }
      
      
     
}