class MoveButton{
    constructor(x,y,prop){

    /*   this.x = x;
       this.y = x
       this.prop = prop;
*/
       this.move =  createSprite(x,y,50,50);
       this.move.visible = prop;
       this.move.scale = 0.2;
       move_button_img = loadImage("images/move.png");
       this.move.addImage(move_button_img);

/*
       if ( this.direction === "right"){
           right_img = loadImage("images/right.png")
           this.move.addImage(right_img)
       }
       if ( this.direction === "left"){
            left_img = loadImage("images/left.png")
            this.move.addImage(left_img);
        } 
        if ( this.direction === "up"){
            up_img = loadImage("images/up.png")
            this.move.addImage(up_img);
        } 
        if ( this.direction === "down"){
            down_img = loadImage("images/down.png")
            this.move.addImage(_img);
        } 
*/




    }


    mousepressed() {

        if(mousePressedOver(this.move)){
            return true;
        }
        else return false;
    }
    destroy(){
        this.move.destroy();
    }
}