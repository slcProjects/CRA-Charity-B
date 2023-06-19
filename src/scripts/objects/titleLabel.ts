export  class TitleLabel extends Phaser.GameObjects.Text {
    // padX is the padding for left and right
    // padY is the padding for top and bottom
    // sizeFont is the text size
    // strokeSize over 0 will make text bold
    constructor(scene,x, y,text, padX, padY, sizeFont, strokeSize) {
      super(scene, x, y, '', { color: 'orangered', fontSize: sizeFont })
      scene.add.existing(this)
      this.setText(text);
      this.setOrigin(0)
      this.setStyle({ backgroundColor: 'orange', border: 'none', fontFamily: 'monospace', strokeThickness: strokeSize, stroke: 'orangered'})
      this.setPadding(x = padX, y = padY)
    }
  
    public update() {
    }
  }
  