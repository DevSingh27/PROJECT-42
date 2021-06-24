var bg;
var issimg,iss;
var s1,s2,s3,s4,spc;
var hasDocked;

function preload(){
 bg = loadImage("Docking-undocking/spacebg.jpg");
 issimg = loadAnimation("Docking-undocking/iss.png");
 s1 = loadAnimation("Docking-undocking/spacecraft1.png");
 s2 = loadAnimation("Docking-undocking/spacecraft1.png");
 s3 = loadAnimation("Docking-undocking/spacecraft1.png");
 s4 = loadAnimation("Docking-undocking/spacecraft1.png");
}

function setup() {
  createCanvas(1000,500);

  spc = createSprite(Math.round(random(200,800)),400);
  spc.addAnimation("sc",s1);
  spc.scale = 0.2;
  
  iss = createSprite(650,180);
  iss.addAnimation("issimg",issimg);
  iss.scale = 0.75;
}

function draw() {
  background(bg);  
  
  fill("pink");
  textSize(30);
  text("Press 'H' for help",10,470);

  if(keyDown("H")){
    fill("White");
    textSize(30);
    text("Required POSITIONS",10,30);
    fill("Yellow");
    text("X : 597",10,60);
    text("Y : 247",10,90);
    fill("White");
    text("Current POSITIONS",10,150);
    fill("Yellow");
    text("X :"+spc.x,10,180);
    text("Y :"+spc.y,10,210);
  }

  if(!hasDocked){
    if(keyDown("UP_ARROW")){
      spc.changeAnimation("sc",s2);
      spc.y = spc.y-1;
    }

    if(keyDown("LEFT_ARROW")){
      spc.changeAnimation("sc",s4);
      spc.x = spc.x-1;
    }

    if(keyDown("RIGHT_ARROW")){
      spc.changeAnimation("sc",s3);
      spc.x = spc.x+1;
    }

    if(keyDown("DOWN_ARROW")){
      spc.changeAnimation("sc",s1);
      spc.y = spc.y+1;
    }
  }
    
    if(spc.x === 597){
      if(spc.y === 247){
        textSize(30);
        fill("White")
        text("Docking Successful",400,400);
        hasDocked = true;
      }
    }
    console.log(spc.x);
    console.log(spc.y);
  drawSprites();
}