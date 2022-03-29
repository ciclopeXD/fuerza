const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var vtn,vtn2;
var circlek;
let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var circulo={
    restitution:0.75
  }
  
  vtn=createImg("right.png");
  vtn.position(150,200);
  vtn.size(50,50);
  vtn.mouseClicked(hForce);
  vtn2=createImg("up.png");
  vtn2.position(300,200);
  vtn2.size(50,50);
  vtn2.mouseClicked(vForce);
  ground =new Ground(200,390,400,20);
circlek=Bodies.circle(200,200,10,circulo);
  World.add(world,circlek);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(circlek.position.x,circlek.position.y,10);
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(circlek,{x:0,y:0},{x:0.05,y:0});
}
function vForce(){
  Matter.Body.applyForce(circlek,{x:0,y:0},{x:0,y:-0.05});
}
