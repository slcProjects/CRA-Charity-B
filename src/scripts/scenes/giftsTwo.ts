import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';



export default class GiftsTwo extends Phaser.Scene {

  private map;
  private alpha;

    constructor() {
      super({ key: 'GiftsTwo' })
     
    }

  
    

    create()
    {
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

        const content = [

          'The martians have also given you a document that contains a part of the Martian alphabet ',
          'to help you decode their messages.'
         
                
        ];
       
        this.alpha = this.add.image(500,400, 'alphaChart');
        this.alpha.setScale(1);

        const title = new Label(this,/*this.cameras.main.centerX*/ 250,50,"Another Gift from the martians");
        var text = this.add.text(250, 115/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.text(150, 650 , "Once you click Start Game, your timer will begin", textStyle);

      
        const nextButton = new Button(this,450,330,'Start Game',"PuzzleOne");
        const previousButton = new Button(this,300,330,'Go Back',"Gifts");



    }
  
}