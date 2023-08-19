import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleTwoSolved2 extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleTwoSolved2' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"Martian Message to decode.");
        const nextButton = new Button(this,550,340,'Next Puzzle',"PuzzleTwoSolved3");

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleTwoSolved1");

  
        const content = [
          'You have found a message. Each message contains the name of a location where the precious stone is not.',
          'Once you have decoded all the messages, you will only have one',
          'location on the map where the stone is located.'

        ];

     
        
        
        const martianOne = this.add.image(700,400, 'messageOne');

        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);
      }
      
      
     
}