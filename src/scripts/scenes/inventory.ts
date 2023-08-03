import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';



export default class Inventory extends Phaser.Scene {

    constructor() {
      super({ key: 'Inventory' })

     
    }

    create(){

    const imgchange = this.add.image(0, 0, 'inventoryBackground');//bg
       
    imgchange.setOrigin(0.5);
    imgchange.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    imgchange.setScale(this.cameras.main.width / imgchange.width, this.cameras.main.height / imgchange.height);

    const imageButton = new ImgButton(this,55,195, '', 'PuzzleOne', 'volcano');

    //this.add.text(50, 550 , "Enter your answers here:", textStyle);

    }
}