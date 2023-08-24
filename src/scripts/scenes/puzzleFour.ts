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
       
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
     

        const title = new Label(this, 100, 50, "Puzzle Four : The Martian Figurines");
        const nextButton = new Button(this,550,340,'Next',"PuzzleFourSolved1");
        if( window.puzzFourSolved == false)
           nextButton.visible = false;

       const previousButton = new Button(this,100,340,'Go Back',"PuzzleThreeSolved2");


        const hintButton = new tooltip(this, 1000, 30, 'Hint!','', 'Make sure to find all the \nfigurines first.' + 
        ' Remember it \nis the actual number of \neyes, not pairs of eyes!');
     //   const imageButton = new ImgButton(this, 600, 30, '', 'Inventory', 'rocket');

        const content = [
          'Found all four Martian figurines? Answer this riddle', 
          'to unlock the next puzzle and continue your journey!',
        ];

        var text = this.add.text(250, 100/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.image(590, 350, 'puzzleFourRiddle')

        this.add.text(330, 560 , "Enter your answer here:", textStyle);
        var inputText = new Input(this, 690, 570, 150, 50);
        this.add.existing(inputText);
        inputText.on('textchange', function(inputText, e){ 
          if(inputText.text == "552426")
            nextButton.visible = true;
           window.puzzFourSolved = true;
        }, this);
            
    }
     
}