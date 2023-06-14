import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';


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
       

        const title = new Label(this,100,100,"Instructions");
        var text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, content, textStyle);
        text.setOrigin(0.5);
        const nextButton = new Button(this,200,200,'Start',"Story");

     

          
    }
     
}