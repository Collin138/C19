var man,man_running,man_collided;
var ground,groundImage,invisibleGround;
var obstaclesGroup, obstacle1,obstacle2;




function preload(){
 man_running = loadAnimation("man running.png")
 
 obstacle1 = loadImage("Logs.png")
 obstacle2 = loadImage("Rocks.png")

 groundImage = loadImage("ground.png")
}

function setup() {

    createCanvas(600,200)
 
    man = createSprite(50,0,20,50)
    man.addAnimation("running", man_running);

    man.scale=0.1

    ground = createSprite(150,180,50,20);
    ground.addImage("ground",groundImage);

    ground.scale=0.1


    invisibleGround = createSprite(200,150,400,10);
    invisibleGround.visible = false;

    
    man.setCollider("circle",0,130,40);
    man.debug=true

}

function draw() {
 
    background("skyblue")
    
    if(keyDown("space")){
       man.velocityY = -10;
      }
      
      man.velocityY = man.velocityY + 0.8;

      
    
    
    
    
    
    
    
      man.collide(invisibleGround)
    
    drawSprites()
    
}