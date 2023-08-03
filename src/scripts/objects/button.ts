
//export class SimpleScene extends Phaser.Scene {

export class Button extends Phaser.GameObjects.Container {
    targetScene: any;

    
    constructor(scene, x, y, text, targetScene) {
        super(scene);

        this.scene = scene;
        this.targetScene  = targetScene;
        this.x = x;
        this.y = y;

      

        const button = scene.add.text(x, y, text)
        .setOrigin(0.5)
        .setPadding(x=35,y=25)
        .setStyle({ backgroundColor: 'orange', border: 'none', fontFamily: 'monospace', fontSize: '45px'})
        .setInteractive();

        this.add(button);
      //  this.add(buttonText);
        button.on('pointerdown', () => {
            button.setStyle({ fill: '#f39c12' });
        });
        button.on('pointerover', () => {
          button.setStyle({ backgroundColor: 'red', fill: 'orange' });
        });
        button.on('pointerout', () => {
          button.setStyle({ backgroundColor: 'orange', fill: 'white' });
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

