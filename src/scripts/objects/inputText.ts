import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';

export class Input extends InputText {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
        this.setStyle("border","solid");
        this.setStyle("borderColor","red" ) ;

        this.setStyle("backgroundColor","black" ) ;
        this.setStyle("fontFamily","Times New Roman" ) ;
        this.setStyle("fontSize","28px" ) ;


        this.fontColor = "green";     


        scene.add.existing(this);

    }
}