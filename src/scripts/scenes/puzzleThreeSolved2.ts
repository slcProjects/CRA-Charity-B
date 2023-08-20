import {textStyle} from '../objects/gameStyle';
import {Button} from '../objects/button';
import {Label} from '../objects/label';
import {Input} from '../objects/inputText';
import { ImgButton } from '../objects/imgButton';
import { tooltip } from '../objects/tooltip';


export default class PuzzleThreeSolved2 extends Phaser.Scene {

    constructor() {
      super({ key: 'PuzzleThreeSolved2' })

     
    }
    
    create()
    {
      let popupVisible = false;
      let popupContainer; 


      const image = this.add.image(0, 0, 'background');
        image.setOrigin(0.5);
        image.setPosition(this.cameras.main.centerX, this.cameras.main.centerY);
        image.setScale(this.cameras.main.width / image.width, this.cameras.main.height / image.height);
       
        const title = new Label(this,70,30,"Another Martian message to decode");
        //const imageButton = new ImgButton(this, 600, 30, '', 'GiftsTwo', 'rocket');
        const rocketHelp = this.add.image(1100,60,'rocket');
        rocketHelp.setInteractive();



        const nextButton = new Button(this,550,340,'Next Puzzle',"PuzzleFour");

        const previousButton = new Button(this,100,340,'Go Back',"PuzzleThreeSolved1");

  
        const content = [
          'You have found another message.Each message contains',
          'the name of a location where the precious stone is not.',
          'Once you have decoded all the messages, you will only have one',
          'location on the map where the stone is located.'

        ];

     
        
        
        const martianOne = this.add.image(325,250, 'messageThree');

        

        var text = this.add.text(150, 70/*this.cameras.main.centerY*/, content, textStyle);
        text.setOrigin(.103);



        rocketHelp.on('pointerdown', () => {
          if (popupVisible) {
              hidePopup.call(this);
          } else {
              showPopup.call(this, 'alphaChart');
          }
      });

         // Function to create the pop-up
    const showPopup = (imageKey) => {
     popupContainer  = this.add.container(900, 400); // Position it in the center of the screen

      const popupBackground = this.add.rectangle(0, 0, 400, 300, 0x000000, 0.7); // Background
      const popupImage = this.add.image(0, 0, imageKey).setScale(0.5); // Image to display

      popupContainer .add([popupBackground, popupImage]);
      popupVisible = true;

    
  }
  function hidePopup() {
    if (popupContainer) {
        popupContainer.destroy();
        popupVisible = false;
    }
}

      }
      
      
     
}