import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleOne extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleOne' })
    
     
    }
    
    create()
    {

      if(window.startTime == 0)
      {
        window.currentTime = new Date();
        window.startTime = window.currentTime.getTime();
      }


      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"Puzzle One : Labyrinth");
        const nextButton = new Button(this,550,340,'Next',"PuzzleOneSolved");
        if( window.puzzOneSolved == false)
           nextButton.visible = false;

        const previousButton = new Button(this,100,340,'Go Back',"instructions");

        const hintButton = new tooltip(this, 1000, 30, 'Hint!','', 'Make sure that you only count\nthe stones that you see\non your way out\nYou have to take the\nshortest route out');

        const content = [
          'You find a labyrinth.You must enter from the left and get out on the right.',
          'While you make your way to the exit you must count the colored stones.',
          'Red = ? Light Blue = ? Yellow = ?',
          'Using the digits you can open a document using 6 digits with this:',
          'RBYRRB'

        ];

     
        
        
        const picOne = this.add.image(400,420, 'puzzOneImg');
        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

       // this.add.text(50, 550 , "Enter your answers here:", textStyle);
        const labelOne = new Label(this,/*this.cameras.main.centerX*/ 825,275,"Enter your answers here:");

        var inputText = new Input(this, 900, 330, 150, 50);
        this.add.existing(inputText);

        inputText.on('textchange', function(inputText, e){ 
          if(inputText.text == "534553")
            nextButton.visible = true;
           window.puzzOneSolved = true;
        }, this);

      
        
    }
     
}