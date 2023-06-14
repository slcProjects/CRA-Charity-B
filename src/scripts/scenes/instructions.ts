import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';



export default class Instructions extends Phaser.Scene {
    constructor() {
      super({ key: 'instructions' })
     
    }

  

    create()
    {
        const content = [
            'Add instructions here.',
            'change to whatever you like'
        ];
       

        const title = new Label(this,/*this.cameras.main.centerX*/ 250,50,"Instructions");
        var text = this.add.text(250, 150/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(0.5);

        this.add.text(250, 250 , "please enter your name", textStyle);

        var inputText = new Input(this, 600, 250, 150, 50);
        this.add.existing(inputText);
        const nextButton = new Button(this,250,250,'Start',"Story");

        inputText.on('textchange', function(inputText, e){ window.userName = inputText.text;
        }, this);

    }
  
}