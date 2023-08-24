import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleTwo extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleTwo' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"Puzzle Two : Frames with Images");
        const nextButton = new Button(this,550,340,'Next',"PuzzleTwoSolved1");
        if( window.puzzTwoSolved == false)
           nextButton.visible = false;

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleOneSolved");

        const hintButton = new tooltip(this, 1000, 30, 'Hint!','', 'You need to unscramble\nthe words first then\nfind how many of those\nyou can see in the frame');


        const content = [
          'On a large rock you find a frame with images. You have to solve the puzzle below.',
          'taSr = ?, ermaCa = ?,  otNes = ?',
           'Repeat the 3 numbers you found in that order twice (6 digits total)'

        ];

     
        
        
        const picOne = this.add.image(400,420, 'framesImgs').setScale(.75);
        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

       // this.add.text(50, 550 , "Enter your answers here:", textStyle);
        const labelOne = new Label(this,/*this.cameras.main.centerX*/ 825,275,"Enter your answers here:");

        var inputText = new Input(this, 900, 330, 150, 50);
        this.add.existing(inputText);

        inputText.on('textchange', function(inputText, e){ 
          if(inputText.text == "645645")
            nextButton.visible = true;
           window.puzzTwoSolved = true;
        }, this);

      
        
    }
     
}