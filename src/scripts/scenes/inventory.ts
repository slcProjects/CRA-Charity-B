import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';



export default class Inventory extends Phaser.Scene {
  icon: any;

    constructor() {
      super({ key: 'Inventory' })


     
    }

    create(){

    const imgchange = this.add.image(0, 0, 'inventoryBackground');//bg
       
    imgchange.setOrigin(0.5);
    imgchange.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    imgchange.setScale(this.cameras.main.width / imgchange.width, this.cameras.main.height / imgchange.height);

    const volcanoButton = new ImgButton(this,330,195, '', 'PuzzleOne', 'volcano');
    const duneButton = new ImgButton(this,490,165, '', 'PuzzleTwo', 'sandDune');
    const mountainButton = new ImgButton(this,125,165, '', 'PuzzleThree', 'mountains');
    const rockButton = new ImgButton(this,570,240, '', 'PuzzleFour', 'rocks');
    const craterButton = new ImgButton(this,400,320, '', '', 'crater');
    const icon = new ImgButton(this,50,150, '', '', 'icon');  
    
    
}

}
