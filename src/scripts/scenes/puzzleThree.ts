import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';

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
        const nextButton = new Button(this, 550, 330, 'Next Puzzle', "PuzzleFour");
        const hintButton = new Button(this, 530, 30, 'hint', "");

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
        inputText.on('textchange', function(inputText, e){ window.puzzOneVarOne = inputText.text;
        }, this);
  

          
    }
     
}