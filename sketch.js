const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var score = 0;
var particle;
var turn = 0;
var gameState;




function setup() {
  //createCanvas(480,800);
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

   ground = new Ground(600,height,1200,20);

   for(var k = 0; k<=innerWidth; k= k+80){
     Divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
   }
  //createSprite(400, 200, 50, 50);
}

var divisionHeight=300;

Text("score" , 20,120);



function draw() {
  background(0);
  Engine.update(engine);  
  ground.display();
  





}

drawSprites();
Text("score" , 20,120);


function mousePressed(){
  if(gameState!=="end")
  {
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}