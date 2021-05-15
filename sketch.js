
  
var detective,detect_img;
var officer,office_img;
var wife,wife_img;
var son,son_img;
var maid,miad_img;
var gardener,gardener_img;
var play_button,next;
var next,next1,next2,next3,next4,next5,next6,next7,next8,next9,next10,next11;
var right,right_img;
var left,left_img;
var down, down_img;
var up, up_img;
var move, move_button_img;
var background,bg0,bg1,bg2,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12,bg13,bg14,bg15,bg16,bg17,bg18,bg19;
var killed;
var next_button_img;
var gameState = 0;
var start = 0;
var play = 1;
var speech,speech2;
var speechVisibility1=true;
var speechVisibility2=true;
var container = document.querySelector(".text");
var flase = false;
var door,door_img;
var wall1,wall2,wall3,wall1img,wall2img,wall3img;
var wa1,wa2,wa3,wa11,wa22,wa33;
var room;
var index=1;
var ball,ball_img;
var axe,pills,noobject,form;
var found;
var maidBUT, maidBUT_img;
var sonBUT, sonBUT_img;
var gardenerBUT,gardenerBUT_img;
var wifeBUT, wifeBUT_img;


var speeds = {
  pause: 500, 
  slow: 120,
  normal: 90,
  fast: 40,
  superFast: 10
};
 
function preload(){

  detect_img = loadImage("images/detective.png");
  office_img = loadImage("images/officer.png")
  maid_img = loadImage("images/maid.png");
  son_img = loadImage("images/son.png")
  wife_img = loadImage("images/wife.png");
  gardener_img = loadImage("images/gardener.png")
  door_img = loadImage("images/door.png")
  bg0 = loadImage("images/start.png");
  bg1 = loadImage("images/house.png");  
  bg2 = loadImage("images/0.PNG");
  bg3 = loadImage("images/1.PNG");
  bg4 = loadImage("images/2.PNG");
  bg5 = loadImage("images/3.PNG");
  bg6 = loadImage("images/inside.PNG");
  bg7 = loadImage("images/ROOM1.PNG");
  bg8 = loadImage("images/ROOM2.PNG")
  bg9 = loadImage("images/ROOM3.PNG")
  wall1img = loadImage("images/ROOM11.PNG")
  wall2img = loadImage("images/ROOM12.PNG")
  wall3img = loadImage("images/ROOM13.PNG")
  wa1 = loadImage("images/ROOM22.png")
  wa2 = loadImage("images/ROOM21.png")
  wa3 = loadImage("images/ROOM23.png")
  wa11 = loadImage("images/ROOM31.PNG")
  wa22 = loadImage("images/ROOM32.PNG")
  wa33 = loadImage("images/Room33.png")
  ball_img = loadImage("images/yellow.png");
  axe = loadImage("images/pickaxe.png");
  pills = loadImage("images/sleeping_pills.png");
  form = loadImage("images/DOCTORSREPORT.png");
  wifeBUT_img = loadImage("images/WifeBUT.png")
  sonBUT_img = loadImage("images/SonBUT.png")
  gardenerBUT_img = loadImage("images/GardenerBUT.png")
  maidBUT_img = loadImage("images/maidBUT.png")
}

function setup(){
 createCanvas(1200,750);
 background = createSprite(600,375,50,50);
 background.addImage(bg0);
 detective = createSprite(150,600,50,50);
 detective.addImage(detect_img);
 officer = createSprite(1050,600,50,50);
 officer.addImage(office_img);
 officer.scale = 1.5
 officer.visible = false;


 wall1= createSprite(width/2,height/2);
 wall1.addImage(wall1img);
 wall1.visible=false;

 wall2= createSprite(width/2,height/2);
 wall2.addImage(wall2img);
 wall2.visible=false;

 wall3= createSprite(width/2,height/2);
 wall3.addImage(wall3img);
 wall3.visible=false;


 room=[wall1,wall2,wall3];
 door = createSprite(600,400,50,50);
 door.addImage(door_img);
 door.scale = 1
 door.visible = false;

 maid = createSprite(402,600,50,50);
 maid.addImage(maid_img);
 maid.scale = 1.5
 maid.visible = false;

 son = createSprite(552,600,50,50);
 son.addImage(son_img);
 son.scale = 1.5
 son.visible = false;

 wife = createSprite(702,600,50,50);
 wife.addImage(wife_img);
 wife.scale = 1.5
 wife.visible = false;

 gardener = createSprite(852,600,50,50);
 gardener.addImage(gardener_img);
 gardener.scale = 1.5
 gardener.visible = false;

 play_button =createSprite(643,520,400,200);
 play_button.visible = false;
 move = new MoveButton(600,200,false);


 speech= new Speech(203,375,200,50,"Welcome to my game. Hope you like it");
 speech2= new Speech(203,375,200,50,"Welcome to my game. Hope you like it");
 speechVisibility2 = false;
 next= new NextButton(1100,600,false);
 next1= new NextButton(1100,500,false);
 next2= new NextButton(1100,400,false);
 next3= new NextButton(1100,300,false);
 next4= new NextButton(1100,200,false);
 next5= new NextButton(100,200,false);
 next6= new NextButton(100,300,false);
 next7= new NextButton(100,400,false);
 next8= new NextButton(100,500,false);
 next9= new NextButton(100,600,false);
 next10= new NextButton(100,700,false);
 next11= new NextButton(600,80,false);
 
 ball = createSprite(790,455,150,150);
 ball.addImage(ball_img);
 ball.scale = 0.1;
 ball.visible = false;

 
 found = createSprite(600,375,50,50);
 found.visible = false;

 wifeBUT = createSprite(297,308,100,100);
 wifeBUT.addImage(wifeBUT_img);
 wifeBUT.visible = false;

 
 sonBUT = createSprite(797,308,100,100);
 sonBUT.addImage(sonBUT_img);
 sonBUT.visible = false;


 gardenerBUT = createSprite(297,120,100,100);
 gardenerBUT.addImage(gardenerBUT_img);
 gardenerBUT.visible = false;

 
 maidBUT = createSprite(797,120,100,100);
 maidBUT.addImage(maidBUT_img);
 maidBUT.visible = false;




}

function draw(){
  console.log(gameState)
  if (mousePressedOver(play_button) && gameState === start){
    background.addImage(bg1);
    detective.visible = false;
    officer.visible = false;
    speech= new Speech(180,68,200,50,"Are you ready to play. click next");
    speechVisibility2 = false;
    found.visible = false;
    next.next.visible = true
    gameState = play
  }
  if (next.mousepressed()&&gameState === play ){
    background.addImage(bg2);
    next1.next.visible = true
    speechVisibility2 = false;
    found.visible = false;
    next.destroy();
    speech= new Speech(180,60,200,50,"See what happened!! one night");
    gameState = 2
  }
  
  if(next1.mousepressed()&& gameState === 2){
    background.addImage(bg3);
    speechVisibility1 = false;
    speechVisibility2 = false;
    found.visible = false;
    next2.next.visible = true
    next1.destroy();
    gameState = 3
  }
  
  if(next2.mousepressed()&& gameState === 3){
    background.addImage(bg4);
    speechVisibility1= false;
    speechVisibility2 = false;
    found.visible = false;
    next3.next.visible = true
    next2.destroy();
    gameState = 4
  }
  if(next3.mousepressed()&& gameState === 4){
    background.addImage(bg5);
    speechVisibility1= false;
    speechVisibility2 = false;
    found.visible = false;
    next4.next.visible = true
    next3.destroy();
    gameState = 5
  }
  if(next4.mousepressed()&& gameState === 5){
    background.addImage(bg6);
    detective.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next5.next.visible = true
    found.visible = false;
    speech= new Speech(180,60,200,50,"Hi. I am Detective Amber");
    next4.destroy();
    gameState = 6
  }
  if(next5.mousepressed()&& gameState === 6){
    background.addImage(bg6);
    detective.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next6.next.visible = true
    found.visible = false;
    speech= new Speech(300,60,200,50,"I am here to investigate. the murder of Dr Sole.");
    next5.destroy();
    gameState = 7
  }
  if(next6.mousepressed()&& gameState === 7){
    background.addImage(bg6);
    detective.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next7.next.visible = true
    found.visible = false;
    speech= new Speech(300,60,200,50,"office tell me what has. happened.");
    next6.destroy();
    gameState = 8
  }
  if(next7.mousepressed()&& gameState === 8){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next8.next.visible = true
    found.visible = false;
    speech= new Speech(700,260,350,100,"Dr sole's body was found in the basement at 0726. by the maid when she was restocking food. ");
    next7.destroy();
    gameState = 9
  }
  if(next8.mousepressed()&& gameState === 9){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = false;
    next9.next.visible = true
    found.visible = false;
    speech= new Speech(700,260,350,100,"Body has a big wound on it's chest which appeares to be a. stab wounds of a weapon thats pointy like a spear");
    next8.destroy();
    gameState = 10
  }
  if(next9.mousepressed()&& gameState === 10){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = true;
    next10.next.visible = true
    found.visible = false;
    speech= new Speech(700,260,390,100,"traces of BENZODIAZEPINE were found in the victim's system. which states he was drugged then murdered.");
    speech2= new Speech(750,360,200,50,"Body was dead for 67mins. Pretty FRESH");
    next9.destroy();
    gameState = 11
  }
  if(next10.mousepressed()&& gameState === 11){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=true;
    speechVisibility1 = true;
    speechVisibility2 = true;
    next11.next.visible = true
    found.visible = false;
    speech= new Speech(700,260,200,100,"here are the suspect for. questioning!");
    speech2= new Speech(300,360,200,50,"yeah, I will choose who's first. Thanks!");
    next10.destroy(); 
    gameState = 12;
  }
  if(next11.mousepressed()&& gameState === 12){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=false;
    maid.visible= true;
    son.visible = true;
    wife.visible = true;
    gardener.visible = true;
    speechVisibility1 = flase;
    speechVisibility2 = flase;
    found.visible = false;
    speech= new Speech(700,260,200,100,"here are the suspect for. questioning!");
    speech2= new Speech(300,360,200,50,"yeah, I will choose who's first. Thanks!");
    next11.destroy(); 
    gameState = 13;

  }
  if (gameState === 14){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=false;
    maid.visible= true;
    son.visible = true;
    wife.visible = true;
    gardener.visible = true;
    speechVisibility1 = true;
    speechVisibility2 = true;
    found.visible = false;
    speech= new Speech(392,172,200,100,"your task is to find the killer. but you have one chance");
    speech2= new Speech(619,360,200,50,"you have to chosse really carefully. enjoy playing press space"); 
  }


 
  if (gameState===15){
    background.visible = true;
    background.addImage(bg7)
    detective.visible=false;
    maid.visible= false;
    son.visible = flase;
    wife.visible = false;
    gardener.visible = false;
    speechVisibility1 = false;
    speechVisibility2 = flase;
    found.visible = false;
    ball.visible = false;
    ball.x = 1102;
    ball.y = 451;
    wall1.addImage(wall1img);
    wall2.addImage(wall2img);
    wall3.addImage(wall3img);
   
    
  }
  if (gameState===15.2){
    background.visible = true;
    background.addImage(bg8)
    detective.visible=false;
    maid.visible= false;
    son.visible = flase;
    wife.visible = false;
    gardener.visible = false;
    speechVisibility1 = false;
    speechVisibility2 = flase;
    found.visible = false;
    ball.visible = false;
    ball.x = 428;
    ball.y = 506;
    wall1.addImage(wa1);
    wall2.addImage(wa2);
    wall3.addImage(wa3);
   
    
  }
  if (gameState===15.3){
    background.visible = true;
    background.addImage(bg9)
    detective.visible=false;
    maid.visible= false;
    son.visible = flase;
    wife.visible = false;
    gardener.visible = false;
    speechVisibility1 = false;
    speechVisibility2 = flase;
    found.visible = false;
    ball.visible = false;
    ball.x = 961;
    ball.y = 428;
    wall1.addImage(wa11);
    wall2.addImage(wa22);
    wall3.addImage(wa33);
   
    
  }
if(gameState===16){
  background.visible=false;
  detective.visible=flase;
    door.visible = flase;
    maid.visible= false;
    son.visible = false;
    wife.visible = false;
    gardener.visible = false;
    speechVisibility1 = false;
    speechVisibility2 = flase;
    found.visible = false;

  room[index].visible=true;
    if(keyDown("RIGHT_ARROW") && index<2){
      room[index].visible=false;
      index=index+1;
      room[index].visible=true;
    }if(keyDown("LEFT_ARROW") && index>0){
      room[index].visible=false;
      index=index-1;
      room[index].visible=true;
    }

    ball.visible = flase;
    ball.depth = room.depth+1; 
}


if(gameState===16.2){
  background.visible=false;
  detective.visible=flase;
    door.visible = flase;
    maid.visible= false;
    son.visible = false;
    wife.visible = false;
    gardener.visible = false;
    speechVisibility1 = false;
    speechVisibility2 = flase;
    found.visible = false;

  room[index].visible=true;
    if(keyDown("RIGHT_ARROW") && index<2){
      room[index].visible=false;
      index=index+1;
      room[index].visible=true;
    }if(keyDown("LEFT_ARROW") && index>0){
      room[index].visible=false;
      index=index-1;
      room[index].visible=true;
    }
    ball.visible = flase;
    ball.depth = room.depth+1;

}
if(gameState===16.3){
  background.visible=false;
  detective.visible=flase;
    door.visible = flase;
    maid.visible= false;
    son.visible = false;
    wife.visible = false;
    gardener.visible = false;
    speechVisibility1 = false;
    speechVisibility2 = flase;
    found.visible = false;

  room[index].visible=true;
    if(keyDown("RIGHT_ARROW") && index<2){
      room[index].visible=false;
      index=index+1;
      room[index].visible=true;
    }if(keyDown("LEFT_ARROW") && index>0){
      room[index].visible=false;
      index=index-1;
      room[index].visible=true;
    }
    ball.visible = false;
    ball.depth = room.depth+1;

}
  if(mouseIsOver(ball) === true){
    if (mouseIsOver(ball)=== false){
      found.visible = flase
    }
    else if( gameState === 16){
      found.addImage(form)
      found.visible = true
      
    }
    else if (gameState === 16.2){
      found.addImage(axe)
      found.visible = true
      
    }
    else if (gameState === 16.3){
      found.addImage(pills)
      found.visible = true
    
    }
    

  }
  if(gameState === 17){
    background.addImage(bg6);
    detective.visible=true;
    officer.visible=false;
    maid.visible= true;
    son.visible = true;
    wife.visible = true;
    gardener.visible = true;
    speechVisibility1 = true;
    speechVisibility2 = true;
    maidBUT.visible = true;
    sonBUT.visible = true;
    gardenerBUT.visible = true;
    wifeBUT.visible = true;
    found.visible = false;
    speech= new Speech(572,33,100,50,"who is the killer");
    speech2= new Speech(950,342,100,50,"only one chance. no going back"); 
    if(mousePressedOver(gardenerBUT) ){
      gameState = 19
    }
    if(mousePressedOver(maidBUT) ){
      gameState = 18
    }
    if(mousePressedOver(wifeBUT) ){
      gameState = 18
    }
    if(mousePressedOver(sonBUT) ){
      gameState = 18
    }

  }

 if (gameState === 18){
  background.addImage(bg0);
  detective.visible=true;
  officer.visible=false;
  maid.visible= flase;
  son.visible = flase;
  wife.visible = flase;
  gardener.visible = true;
  speechVisibility1 = true;
  speechVisibility2 = true;
  maidBUT.visible = flase;
  sonBUT.visible = flase;
  gardenerBUT.visible = flase;
  wifeBUT.visible = flase;
  found.visible = flase;
  speech= new Speech(621,399,200,200,"you lost. you lost");
  speech2= new Speech(950,342,100,50,"couldnt catch me"); 
 }     

 if (gameState === 19){
  background.addImage(bg0);
  detective.visible=true;
  officer.visible=false;
  maid.visible= flase;
  son.visible = flase;
  wife.visible = flase;
  gardener.visible = true;
  speechVisibility1 = true;
  speechVisibility2 = true;
  maidBUT.visible = flase;
  sonBUT.visible = flase;
  gardenerBUT.visible = flase;
  wifeBUT.visible = flase;
  found.visible = flase;
  speech= new Speech(621,399,200,200,"you won. you saved everyone");
  speech2= new Speech(950,342,100,50,"noooooooooo"); 
 }
 
 
  drawSprites();
  if (gameState === 13){
    textSize(20);
    fill(255);
    text("press M or m for maid",50,50);
    text("press S or s for son",50,80);
    text("press W or w for wife",50,110);
    text("press G or g for gardener",50,140);
    text("press space to continue",50,170);
  }
  if(speechVisibility1 === true){
    speech.display();
  }
  if(speechVisibility2 === true){
    speech2.display();
  }




  text("("+mouseX+","+mouseY+")",mouseX,mouseY);
}   


function keyPressed(){
  if((keyCode === 109||keyCode === 77) && gameState === 13){
    speechVisibility1 = true;
    speechVisibility2 = true;
    speech= new Speech(700,260,200,100,"I was going downstairs to restock. when i saw the body");
    speech2= new Speech(300,360,200,50,"i was so shooked. i am still in shock");
  }
  if((keyCode === 115||keyCode === 83) && gameState === 13){
    speechVisibility1 = true;
    speechVisibility2 = true;
    speech= new Speech(700,260,250,100,"i couldnt sleep however that well because. someone didnt get me my medicine");
    speech2= new Speech(300,360,200,50," i was sleeping with. my wife in my room");
  }
  if((keyCode === 119||keyCode === 87) && gameState === 13){
    speechVisibility1 = true;
    speechVisibility2 = true;
    speech= new Speech(700,260,200,100,"i was sleeping with my. husband in our room");
    speech2= new Speech(300,360,200,50,"he didnt get any sleep because. i couldn't find the medicine");
  }
  if((keyCode === 103||keyCode === 71) && gameState === 13){
    speechVisibility1 = true;
    speechVisibility2 = true;
    speech= new Speech(700,260,100,50,"i was in my bed");
    speech2= new Speech(300,360,200,50,"i dont remember anything. i can black out sometimes");
  }
  if(keyCode === 32){
      if(gameState==13){
    speechVisibility1 = true;
    speechVisibility2 = true;
    gameState = 14
      }else if(gameState === 14){
        speechVisibility1 = flase;
        speechVisibility2 = flase;
        gameState = 15
  
      }else if( gameState === 15){
        console.log(index)
        console.log(gameState)
        speechVisibility1 = flase;
        speechVisibility2 = flase;
        found.visible = flase;
        gameState = 16
      }else if(gameState === 15.2){
        console.log(index)
        console.log(gameState)
        speechVisibility1 = flase;
        speechVisibility2 = flase;
        found.visible = flase;
        gameState = 16.2

      }else if(gameState === 15.3){
        console.log(index)
        console.log(gameState)
        speechVisibility1 = flase;
        speechVisibility2 = flase;
        found.visible = flase;
        gameState = 16.3
      }


  }
  if (keyCode === 16 ){
    if (gameState === 16){
      console.log(index)
      console.log(gameState)
      room[index].visible=false;
      found.visible = flase;
      background.visible = true;
      gameState = 15
    }else if(gameState === 16.2){
      console.log(index)
      console.log(gameState)
      console.log(drawSprites)
      room[index].visible=false;
      found.visible = flase;
      background.visible = true;
      gameState = 15.2
    }else if(gameState === 16.3){
      console.log(index)
      console.log(gameState)
      room[index].visible=false;
      found.visible = flase;
      background.visible = true;
      gameState = 15.3
    }
  }
  if(keyCode === 49 && ( gameState === 15 || gameState === 15.2 || gameState === 15.3)){
    gameState = 15;
  }
  if(keyCode === 50 && ( gameState === 15 || gameState === 15.2 || gameState === 15.3)){
    gameState = 15.2;
  }
  if(keyCode === 51 && ( gameState === 15 || gameState === 15.2 || gameState === 15.3) ){
    gameState = 15.3
  }
if (keyCode === 13){
  if(gameState === 15.1 ||gameState === 15.2 ||gameState === 15.3 ){
    gameState = 17;
  }

}

}
