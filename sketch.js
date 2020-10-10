
var bullet, wall;
var thickness, speed, weight;


function setup() {
  createCanvas(800,400);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

  wall = createSprite(700,200,thickness,300);
  wall.shapeColor = "gray";

  bullet = createSprite(100, 200, 20, 20);
  bullet.shapeColor = "blue";

 

}

function draw() {
  background(0); 
  
  

 bullet.velocityX = speed;
  
  
  

  if(collided(bullet, wall)) {

    bullet.velocityX = 0;
  
  var damage = Math.round(0.5 * weight * speed * speed/(thickness * thickness * thickness));
  console.log(damage);

  if(damage > 10) {
  wall.shapeColor = "red "
  console.log("red");
  }
  if(damage < 10) {
  wall.shapeColor = "green"
  console.log("green");

   }
  }
   

  drawSprites();
}


function collided(bullet, wall) {

  if (wall.x - bullet.x < wall.width/2 + bullet.width/2) {
   return true
  }
  else{
    return false
  }


}







