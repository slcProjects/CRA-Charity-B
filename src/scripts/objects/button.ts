
//export class SimpleScene extends Phaser.Scene {

export class Button extends Phaser.GameObjects.Container {
    targetScene: any;

    
    constructor(scene, x, y, text, targetScene) {
        super(scene);

        this.scene = scene;
        this.targetScene  = targetScene;
        this.x = x;
        this.y = y;

        /*

        font-family: monospace;
        border: none;
        border-radius: .5em;
        color: aliceblue;
        background-color: orange;
        padding-left: 1.5em;
        padding-right: 1.5em;
        padding-top: .5em;
        padding-bottom: .5em;
        font-size: 4em;
        margin-top: .5em;
        */

        const button = scene.add.text(x, y, text)
        .setOrigin(0.5)
        .setPadding(10)
        .setStyle({ backgroundColor: '#111' })
        .setInteractive();

        /* can also use images for buttons
        const button = this.scene.add.image(x, y, 'navButton').setInteractive();
        const buttonText = this.scene.add.text(x, y, text, { fontSize:
         '28px', color: '#000' });
       Phaser.Display.Align.In.Center(buttonText, button);
        */

        this.add(button);
      //  this.add(buttonText);
        button.on('pointerdown', () => {
            button.setStyle({ fill: '#f39c12' });
        });
        button.on('pointerup', () => {
            button.setStyle({ fill: '#FFF' });
          if (this.targetScene) {
            setTimeout(() => {
              this.scene.scene.launch(targetScene);
              this.scene.scene.stop(scene);
            }, 300);
          }
        } );
        this.scene.add.existing(this);
      }
}
/*
export class Button extends Phaser.GameObjects.Container {
    on: any;
    constructor(x, y, label, scene) {
        super(scene);
        console.log("inside constructor");
        const button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ backgroundColor: '#111' });
         //   .setInteractive();
           
    }
}
*/