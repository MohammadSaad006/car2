var car,wall
var speed,weight
function setup() {
  createCanvas(1500,400);
  car=createSprite(10, 200, 50, 50);
  wall=createSprite(900, 200, 50, 200);
  car.shapeColor="white"
  wall.shapeColor="brown"
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed
}

function draw() {
  background(0);  
  if(isTouching(wall,car)){
    car.velocityX=0
    var d=0.5*weight*speed*speed/22500
    if(d>180){
      car.shapColor="red"
    
    }
    if(d<180&&d>100){
     car.shapeColor="yellow"

    }
    if(d<100){
      car.shapeColor="green"
    }
  }
  drawSprites();
}