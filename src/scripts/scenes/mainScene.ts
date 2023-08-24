
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import { TitleLabel } from '../objects/titleLabel';
import { LanguageButton } from '../objects/languageButton';




export default class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' })
  }

  create() {

    const image = this.add.image(0, 0, 'background');//bg
       
    image.setOrigin(0.5);
    image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
    image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
    const title = new TitleLabel(this,50,80,"Escape From Mars!", 120,50, 60, 2);
    const names = new TitleLabel(this,50,260, "Developed by: St. Lawrence College, CPA",10,10, 20,0)
    const startButton = new Button(this,230,260,'Begin',"instructions");
    const engButton = new LanguageButton(this, 130,200, 'English', "eng");
    const frButton = new LanguageButton(this, 330,200, 'Francais', "fr");

   






  }    


  update() {
    
  }
}
