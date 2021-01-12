var car, car2, car3

var wall1, wall2

var target1, target2, target3

var speed

var weight

var deformation

 

function setup() {

speed = random(55,90);

weight = random(400,1500);

 

  createCanvas(800,400);

 

 

  var car = createSprite(30,50,50,25);

  car.shapeColor = "red";

 

 

 

 

  var wall1 = createSprite(30,125,1540,15);

 

  var target1 = createSprite (770,50,50,15);

 

  var deformation = (0.5 * speed * weight * speed/22500);
  car.velocityX = speed;

 
}

 

function draw() {

  background(255,255,75);

  


  drawSprites();

}
