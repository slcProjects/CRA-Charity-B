import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';

export default class PuzzleThree extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleThree' })

     
    }
    
    create()
    {
       
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       

        const title = new Label(this, 100, 50, "Puzzle Three : Word Search");

        const nextButton = new Button(this,550,340,'Next',"PuzzleThreeSolved1");
        if( window.puzzThreeSolved == false)
           nextButton.visible = false;

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleTwoSolved3");

        const hintButton = new tooltip(this, 1000, 30, 'Hint!','', 'You can solve the puzzle \neven if you are not' + 
        '\ncompletely done! You just \nneed the 7-letter word.');
     //   const imageButton = new ImgButton(this, 600, 30, '', 'Inventory', 'rocket');

        const content = [
          'You find a word search next! Find all the words.', 
          'Only some letters will be left which will give you a word.',
          'Use that word as the password to open one of the locked boxes.',
        ];

        var text = this.add.text(250, 100/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.image(490, 400, 'puzzThreeImgOne')
        this.add.image(920, 410, 'puzzThreeImgTwo')

        this.add.text(320, 630 , "Enter your password here:", textStyle);
        var inputText = new Input(this, 710, 640, 150, 50);
        this.add.existing(inputText);

        inputText.on('textchange', function(inputText, e){ 
          if(inputText.text == "habitat")
          {
            nextButton.visible = true;
           window.puzzThreeSolved = true;
          }
        }, this);
      

          
    }
     


}