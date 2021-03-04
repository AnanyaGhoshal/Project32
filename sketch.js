const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ball1, ball2, ball3, sling, hit;

var gameState = "onsling";

function preload(){

  music = loadSound("music.mp3");

}


function setup() {
  createCanvas(600,650);
 
  engine = Engine.create();
  world = engine.world;
  getplaytime();

 
  ground2 = new Ground(300,630,600,5);
  ground3 = new Ground(10,350,5,650);
  ground4 = new Ground(595,350,5,650);

  ball1 = new Ball(200,590);
  ball4 = new Ball(500,590);
  ball5 = new Ball(100,590);
  ball2 = new Snowball(300,590);
  ball3 = new Sun(400,590);
  ball6 = new Ball(550,590);
  ball7 = new Sun(150,570);
  ball8 = new Sun(350,570);
  ball9 = new Snowball(450,570);
  ball10 = new Snowball(50,570);
  ball11 = new Snowball(570,570);

  hit = new Hit(385,120,10);

  sling = new Slingshot(hit.body,{x:385,y:120});   

  music.play();

}

function draw() {

  background(0); 

  
  Engine.update(engine);
 
  ground2.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ground3.display();
  ground4.display();
  hit.display();
  sling.display();
  
}

function mouseDragged(){
  if(gameState!=="launched"){

  Matter.Body.setPosition(hit.body,{x:mouseX,y:mouseY});
  }

}

function mouseReleased(){

  sling.fly();
  
}
function keyPressed(){

  if(keyCode===32){

    Matter.Body.setPosition(hit.body,{x:385,y:120});
    sling.attach(hit.body);
  
  }


}
async function getplaytime(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>10){
  
   gameState ="onsling";
  }else{
  
      gameState = "launched";
      text("Gameover!!",200,500);

  }
  
  }


