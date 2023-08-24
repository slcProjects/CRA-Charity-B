import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleSix extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleSix' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"Puzzle Five : Decoding Messages");
        const nextButton = new Button(this,550,340,'Next',"Finish");
        if( window.puzzSixSolved == false)
           nextButton.visible = false;

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleFive");

       // const hintButton = new tooltip(this,1000,30,'Hint!','','Look here');
        //addTooltipToButton(hintButton, 'This is a hint');
      //  const imageButton = new ImgButton(this, 600, 30, '', 'Inventory', 'rocket');

        const content = [
         'You notice that there are numbers on the stones. Start at the yellow',
          'stone. Follow the arrows and stop at the spot to figure out the',
          'number. Reset at the yellow stone for each number. You have to enter',
          'the 3 digits twice to enter. (ABCABC)'

        ];

     
        
        
        const picOne = this.add.image(400,420, 'rocksImg');
        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

       // this.add.text(50, 550 , "Enter your answers here:", textStyle);
        const labelOne = new Label(this,/*this.cameras.main.centerX*/ 825,275,"Enter your answers here:");

        var inputText = new Input(this, 900, 330, 150, 50);
        this.add.existing(inputText);

        inputText.on('textchange', function(inputText, e){ 
          if(inputText.text == "178178")
          {
            nextButton.visible = true;
           window.puzzSixSolved = true;
           window.currentTime = new Date();
           window.endTime = window.currentTime.getTime();
          }

        }, this);

      
        
    }
     
}