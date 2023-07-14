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
       

        const title = new Label(this,100,100,"Puzzle Three : Word Search");
        const nextButton = new Button(this,550,330,'Next Puzzle',"PuzzleFour");
        const hintButton = new Button(this,500,30,'hint',"");

        const content = [
          'You find a word search next! Find all the words.', 
          'Only some letters will be left which will give you a word.',
          'Use that word as the password to open one of the locked boxes.',
        ];

        this.add.image(500,400, 'puzzThreeImgOne');

        var text = this.add.text(250, 180/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.text(50, 560 , "Enter your password here:", textStyle);
        var inputText = new Input(this, 450, 570, 150, 50);
        this.add.existing(inputText);
        inputText.on('textchange', function(inputText, e){ window.puzzOneVarOne = inputText.text;
        }, this);
  

          
    }
     
}