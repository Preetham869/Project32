const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18;
var polygon,polygonImg;
var score = 0;
var slingshot,backgroundImage;

function preload() {
 
  polygonImg = loadImage("Hexagon.png");

  GetTime();

}

function setup() {
  var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  stand1 = new Stand(410,253,200,10)
  stand2 = new Stand(700,350,200,10)

  block1  = new Box(350,235,30,40)
  block2 = new Box(380,235,30,40)
  block3 = new Box(410,235,30,40)
  block4 = new Box(440,235,30,40)
  block5 = new Box(470,235,30,40)
  block6 = new Box(380,195,30,40)
  block7 = new Box(410,195,30,40)
  block8 = new Box(440,195,30,40)
  block9 = new Box(410,155,30,40)
 
  block10 = new Box(640,330,30,40)
  block11 = new Box(670,330,30,40)
  block12 = new Box(700,330,30,40)
  block13 = new Box(730,330,30,40)
  block14 = new Box(760,330,30,40)
  block15 = new Box(670,300,30,40)
  block16 = new Box(700,300,30,40)
  block17 = new Box(730,300,30,40)
  block18 = new Box(700,280,30,40)

  polygon = Bodies.circle(160,200,40);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:160,y:150})

	Engine.run(engine);

}

function draw() {
  
  if(backgroundImage)

  background(backgroundImage);
  noStroke();
  textFont("Algerian")
  fill("red")
  textSize(35);
  text("Score:- " + score,850,100);

textSize(25);
fill("white")
textFont("Algerian")
text("😊Drag the Hexagonal Stone and Release it, to launch it towards the Blocks!👍" , 15,50)

stand1.display();
stand2.display();

fill("purple")
block1.display(); 
block2.display(); 
block3.display(); 
block4.display();  
block5.display(); 

fill("green")
block6.display(); 
block7.display();  
block8.display(); 

fill("red")
block9.display();

fill("indigo")
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();

fill("brown")
block15.display();
block16.display();
block17.display();

fill("gold")
block18.display();

imageMode(CENTER)
image(polygonImg ,polygon.position.x,polygon.position.y,40,40);

slingshot.display();

}

/*block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();*/


function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon, {x:30,y:100}) 
    slingshot.attach(this.polygon);
  }
}

 async function GetTime(){

  var GetInfo = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata"); 
  var GetInfoJson = await GetInfo.json();
  console.log(GetInfoJson);  

  var DT = GetInfoJson.datetime;
  console.log(DT);

  var Hour = DT.slice(11,19);
  console.log(Hour);

  if(Hour >= 06 && Hour <= 18){

   bg = "bg1.jpg";

  } 
  else {

   bg = "bg2.jpg";

  }

  backgroundImage = loadImage(bg);
  console.log(backgroundImage)

 }
