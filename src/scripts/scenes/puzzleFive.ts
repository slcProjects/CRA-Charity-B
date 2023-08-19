import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleFive extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleFive' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"Puzzle Five : Decoding Messages");
        const nextButton = new Button(this,550,340,'Next',"PuzzleSix");
        if( window.puzzFiveSolved == false)
           nextButton.visible = false;

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleFourSolved1");

       // const hintButton = new tooltip(this,1000,30,'Hint!','','Look here');
        //addTooltipToButton(hintButton, 'This is a hint');
      //  const imageButton = new ImgButton(this, 600, 30, '', 'Inventory', 'rocket');

        const content = [
          'You have decoded the last message! ',
          ' You can now open the document named Locked map, the password will be: ',
          'The second word of the location where the precious stone and the',
          'number 2. No space between the word and the 2. The letters of the',
          'word will be in small caps.  _ _ _ _ _ _ _ 2'

        ];

     
        
        
        const picOne = this.add.image(400,420, 'mapLg').setScale(0.75);
        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

       // this.add.text(50, 550 , "Enter your answers here:", textStyle);
        const labelOne = new Label(this,/*this.cameras.main.centerX*/ 825,275,"Enter your answers here:");

        var inputText = new Input(this, 900, 330, 150, 50);
        this.add.existing(inputText);

        inputText.on('textchange', function(inputText, e){ 
          if(inputText.text == "cluster2")
            nextButton.visible = true;
           window.puzzFiveSolved = true;
        }, this);

      
        
    }
     
}