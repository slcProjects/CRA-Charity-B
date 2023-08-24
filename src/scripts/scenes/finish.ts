import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';

export default class Finish extends Phaser.Scene {

    constructor() {
      super({ key: 'Finish' })
    

     
    }
    
    create()
    {
        const milliseconds = window.endTime - window.startTime;
        var minutes = Math.floor((milliseconds / 1000) / 60);
        var seconds = Math.floor((milliseconds / 1000) % 60);
       
        const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
        const content = [
            'You have found the magical precious stone. You return it to the',
            'Martians and you come back to Canada in the snow.',
            'Peace has returned to Mars! The Martians thank you.',
            'I hope you had fun playing my game! Until next time…',
        ];
       
        const title = new Label(this,100,100, "You are done!");
        var text = this.add.text(650, 250/*this.cameras.main.centerY*/, content, textStyle);
        if(minutes < 1)
            minutes = 0;
        const finalTime = new Label(this, 450, 550,"final time, " + minutes + ":" + seconds ); 

       

        text.setOrigin(0.5);
        const UserName = new Label(this, 450, 390,"Congratulations!, " + window.userName + "!");

          
    }
     
}