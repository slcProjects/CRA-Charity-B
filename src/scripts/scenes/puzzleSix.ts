import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';

export default class PuzzleSix extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleSix' })

     
    }
    
    create()
    {
       
      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       

        const title = new Label(this, 100, 50, "Puzzle Six : Last Lock");
        const nextButton = new Button(this, 550, 330, 'Finish!', "MainScene");
        const hintButton = new tooltip(this, 1000, 30, 'Hint!','', 'Look here!');
        const imageButton = new ImgButton(this, 600, 30, '', 'Inventory', 'rocket');

          
    }
     
}