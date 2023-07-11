import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';



export default class Inventory extends Phaser.Scene {

    constructor() {
      super({ key: 'Inventory' })

     
    }

    create(){

    const image = this.add.image(0, 0, 'inventoryBackground');//bg
       
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);

    }
}