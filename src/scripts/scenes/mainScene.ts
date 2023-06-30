
import {Button} from '../objects/button';
import {Label} from '../objects/label';




export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {

    const image = this.add.image(0, 0, 'background');//bg
       
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
    const title = new Label(this,100,100,"Escape From Mars!");
    const startButton = new Button(this,200,200,'Begin',"instructions");

   






  }    


  update() {
    
  }
}
