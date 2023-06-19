export class LanguageButton extends Phaser.GameObjects.Container {
    targetScene: any;

    
    constructor(scene, x, y, text, targetScene) {
        super(scene);

        this.scene = scene;
        this.targetScene  = targetScene;
        this.x = x;
        this.y = y;

        const button = scene.add.text(x, y, text)
        .setOrigin(0.5)
        .setPadding(x=30,y=20)
        .setStyle({ backgroundColor: '#FFDE8C', border: 'none', fontFamily: 'monospace', fontSize: '30px', fill: 'orangered'})
        .setInteractive();

        this.add(button);
        button.on('pointerover', () => {
          button.setStyle({ backgroundColor: 'orange'});
        });
        button.on('pointerout', () => {
          button.setStyle({ backgroundColor: '#FFDE8C' });
        });
        /* will allow selection of language when added.
        button.on('pointerup', () => {
            button.setStyle({ fill: '#FFF' });
          if (this.targetScene) {
            setTimeout(() => {
              this.scene.scene.launch(targetScene);
              this.scene.scene.stop(scene);
            }, 300);
          }
        } );
        */
        this.scene.add.existing(this);
      }
}