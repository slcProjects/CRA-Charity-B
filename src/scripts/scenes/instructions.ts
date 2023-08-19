import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';



export default class Instructions extends Phaser.Scene {

  private map;
  private alpha;

    constructor() {
      super({ key: 'instructions' })
     
    }

  
    

    create()
    {
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

        const content = [

          'You have met some Martians. The Martians need your help to recover a',
          'magical precious stone. This stone is essential to their culture and it is',
          'imperative that you find the stone as soon as possible. The stone has magical',
          'powers and allows Martians to maintain the peace on their planet. Without it,',
          'the different clans might go to war.'
                
        ];
       
  

        const title = new Label(this,/*this.cameras.main.centerX*/ 250,50,"Instructions");
        var text = this.add.text(250, 150/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.text(150, 350 , "please enter your name", textStyle);

        var inputText = new Input(this, 500, 370, 300, 50);
        this.add.existing(inputText);
        const nextButton = new Button(this,450,335,'Next',"Gifts");//story gone

        inputText.on('textchange', function(inputText, e){ 
          
          window.userName = inputText.text;
        
        }, this);

    }
  
}