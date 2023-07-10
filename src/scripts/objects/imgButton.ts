import * as Phaser from 'phaser';

export class ImgButton extends Phaser.GameObjects.Container {
  targetScene: any;

  constructor(scene: Phaser.Scene, x: number, y: number, text: string, targetScene: any, imagePath: string) {
    super(scene);

    this.scene = scene;
    this.targetScene = targetScene;
    this.x = x;
    this.y = y;

    const button = this.scene.add.image(x, y, imagePath).setInteractive();
    const buttonText = this.scene.add.text(x, y, text, { fontSize: '28px', color: '#000' });

    this.add(button);
    this.add(buttonText);

    button.on('pointerdown', () => {
      // Handle pointer down event
      button.setTint(0xf39c12);
    });

    button.on('pointerover', () => {
      // Handle pointer over event
      button.setTint(0xff0000);
    });

    button.on('pointerout', () => {
      // Handle pointer out event
      button.clearTint();
    });

    button.on('pointerup', () => {
      // Handle pointer up event
      button.clearTint();
      if (this.targetScene) {
        setTimeout(() => {
          this.scene.scene.launch(targetScene);
          this.scene.scene.stop(scene);
        }, 300);
      }
    });

    this.scene.add.existing(this);
  }
}