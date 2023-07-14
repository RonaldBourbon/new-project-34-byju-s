const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var engine;
var world;

var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;

var rope;
var ball;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,550,1000,15);
  
  box1 = new Box(900,100,50,50);
  box2 = new Box(900,100,50,50);
  box3 = new Box(900,100,50,50);
  box4 = new Box(900,100,50,50);
  box5 = new Box(900,100,50,50);
  box6 = new Box(900,100,50,50);
  
  box7 = new Box(750,100,50,50);
  box8 = new Box(750,100,50,50);
  box9 = new Box(750,100,50,50);
  box10 = new Box(750,100,50,50);
  box11 = new Box(750,100,50,50);
  box12 = new Box(750,100,50,50);

  box13 = new Box(825,100,50,50);
  box14 = new Box(825,100,50,50);
  box15 = new Box(825,100,50,50);
  box16 = new Box(825,100,50,50);
  box17 = new Box(825,100,50,50);
  box18 = new Box(825,100,50,50);
  box19 = new Box(825,100,50,50);
  box20 = new Box(825,100,50,50);

  ball = new Ball(550,300,80,80);
  rope = new Rope(ball.body,{x:700,y:100});
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  rope.display();
  ball.display();
}