class NextButton{
    constructor(x,y,prop){

    /*   this.x = x;
       this.y = x
       this.prop = prop;
*/
       this.next =  createSprite(x,y,50,50);
       this.next.visible = prop;
       this.next.scale = 0.2;
       next_button_img = loadImage("images/arrow.png");
       this.next.addImage(next_button_img);
    }


    mousepressed() {

        if(mousePressedOver(this.next)){
            return true;
        }
        else return false;
    }
    destroy(){
        this.next.destroy();
    }
}