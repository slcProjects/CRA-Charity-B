import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';

export default class PuzzleOne extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleOne' })

     
    }
    
    create()
    {

      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,100,30,"Puzzle One : Labyrinth");
        const nextButton = new Button(this,550,330,'Next Puzzle',"PuzzleTwo");
        const hintButton = new Button(this,500,30,'hint',"");
  

        const content = [
          'You find a labyrinth.You must enter from the left and get out on the right.',
          'While you make your way to the exit you must count the colored stones.',
        ];

        this.add.image(500,400, 'puzzOneImg');

        var text = this.add.text(250, 150/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.text(50, 550 , "Enter your answers here:", textStyle);
        const labelOne = new Label(this,/*this.cameras.main.centerX*/ 80,590,"Red");
        var inputText = new Input(this, 150, 650, 150, 50);
        this.add.existing(inputText);
        inputText.on('textchange', function(inputText, e){ window.puzzOneVarOne = inputText.text;
        }, this);

        const labelTwo = new Label(this,/*this.cameras.main.centerX*/ 300,590,"Blue");
        var inputText = new Input(this, 370, 650, 150, 50);
        this.add.existing(inputText);
        inputText.on('textchange', function(inputText, e){ window.puzzOneVarTwo = inputText.text;
        }, this);

        const labelThree = new Label(this,/*this.cameras.main.centerX*/ 520,590,"Yellow");
        var inputText = new Input(this, 600, 650, 150, 50);
        this.add.existing(inputText);
        inputText.on('textchange', function(inputText, e){ window.puzzOneVarThree = inputText.text;
        }, this);
    }
     
}