import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';



export default class Gifts extends Phaser.Scene {

  private map;
  private alpha;

    constructor() {
      super({ key: 'Gifts' })
     
    }

  
    

    create()
    {
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

        const content = [

          'The martians give you objects to help you on your quest.',
          'A map of the region where the precious stone is hidden:'
         
                
        ];
       
        this.map = this.add.image(450,375, 'Map');
        this.map.setScale(1);

        const title = new Label(this,/*this.cameras.main.centerX*/ 250,50,"Gifts from the martians");
        var text = this.add.text(250, 115/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);

        this.add.text(150, 650 , "And...", textStyle);

      
        const nextButton = new Button(this,450,330,'Next',"GiftsTwo");
        const previousButton = new Button(this,300,330,'Go Back',"instructions");



    }
  
}