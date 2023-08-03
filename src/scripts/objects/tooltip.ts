export class tooltip extends Phaser.GameObjects.Container {
    targetScene: any;
    tooltipText: string;
    tooltip: Phaser.GameObjects.Text;
    button: Phaser.GameObjects.Text;
  
    constructor(scene, x, y, text, targetScene, tooltipText) {
      super(scene);
  
      this.scene = scene;
      this.targetScene = targetScene;
      this.x = x;
      this.y = y;
      this.tooltipText = tooltipText;
  
      // Create the tooltip
      this.tooltip = scene.add.text(x, y - 20, tooltipText)
        .setOrigin(0.5)
        .setPadding(x = 35, y = 25)
        .setStyle({ backgroundColor: 'white', border: 'none', fontFamily: 'monospace', fontSize: '20px', color: 'black' })
        .setDepth(1)
        .setVisible(false);
      
      // Create the button
      this.button = scene.add.text(x, y, text)
        .setOrigin(0.5)
        .setPadding(x = 35, y = 25)
        .setStyle({ backgroundColor: 'orange', border: 'none', fontFamily: 'monospace', fontSize: '45px' })
        .setInteractive();
  
      this.add([this.tooltip, this.button]);
  
      // Attach event listeners
      this.button.on('pointerover', this.showTooltip.bind(this));
      this.button.on('pointerout', this.hideTooltip.bind(this));
      this.button.on('pointerdown', () => {
        this.button.setStyle({ fill: '#f39c12' });
      });
      this.button.on('pointerup', () => {
        this.button.setStyle({ fill: '#FFF' });
        if (this.targetScene) {
          setTimeout(() => {
            this.scene.scene.launch(targetScene);
            this.scene.scene.stop(scene);
          }, 300);
        }
      });
      
      this.scene.add.existing(this);
    }
  
    private showTooltip() {
      const buttonBounds = this.button.getBounds();
      //const tooltipX = buttonBounds.centerX - 10;
      const tooltipY = buttonBounds.bottom + 20; // Adjust the value as needed for spacing
      
      this.tooltip.setPosition( tooltipY);
      this.tooltip.setVisible(true);
    }
    
  
    private hideTooltip() {
      this.tooltip.setVisible(false);
    }
  }
  