import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';

export default class Story extends Phaser.Scene {

    constructor() {
      super({ key: 'Story' })

     
    }
    
    create()
    {

       
        console.log("inside story =>" + window.userName);
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
        const content = [
            'You are on an exploratory mission on Mars and you met some Martians!',
            'They need your help recovering a magical precious stone. It is',
            'essential to their culture and you need to find the stone as soon',
            'as you can! Without the magical powers in the stone, the Martians wont', 
            'be able to maintain peace and the different clans might go to war.',
            'You must help the Martians find the stone!'
        ];
       

        const title = new Label(this,100,100, "Escape From Mars!");
        var text = this.add.text(650, 250/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(0.5);
        const UserName = new Label(this, 450, 390,"Are you ready, " + window.userName + "?");

        var text = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY,this.data.get('userName'), textStyle);
        text.setOrigin(0.5);
        const nextButton = new Button(this, 320, 250,'Start',"PuzzleOne");
  

          
    }
     
}