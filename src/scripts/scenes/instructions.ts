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
                    'You have to follow the map. You will have access to other',
                    'documents that are password protected. You must solve the puzzles to find',
                    'the passwords. Once you think you have a password you can try it out on the',
                    'protected documents. The game can be completed in about 30 minutes.',
                    'These are a few objects to help you on your quest.',
                    'You start your research…. You will find some puzzles with locks. When',
                    'you decode a combination of numbers, you can try that number on one of',
                    'the password protected puzzles. Good luck!'
        ];
       
        this.map = this.add.image(350,490, 'Map');
        this.map.setScale(0.8,0.6);

        this.alpha = this.add.image(950,490, 'alphaChart');
        this.alpha.setScale(0.5,0.5);

        const title = new Label(this,/*this.cameras.main.centerX*/ 250,50,"Instructions");
        var text = this.add.text(250, 150/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.text(150, 650 , "please enter your name", textStyle);

        var inputText = new Input(this, 500, 670, 150, 50);
        this.add.existing(inputText);
        const nextButton = new Button(this,450,335,'Start',"Story");

        inputText.on('textchange', function(inputText, e){ window.userName = inputText.text;
        }, this);

    }
  
}