export  class Label extends Phaser.GameObjects.Text {
  constructor(scene,x, y,text) {
    super(scene, x, y, '', { color: 'black', fontSize: '28px' })
    scene.add.existing(this)
    this.setText(text);
    this.setOrigin(0)
  }

  public update() {
  }
}
