const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var box2;
var box3;
var box4;
var box5;
var pig2;
var log1;
var log2;
var log3;
var log4;
var plateform;
var log5;
var sling;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    plateform = new Ground(150,305,300,170);
    box1 = new Box(700,320);
    box2 = new Box(920,320);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    log5 = new Log(200,210,100,PI/2);

    box3 = new Box(700,240);
    box4 = new Box(920,240);
    pig2 = new Pig(810,220);

    log2 = new Log(810,180,300,PI/2);

    box5 = new Box(810,160);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(100,100);
    sling = new SlingShot(bird.body,{x:200,y:150});
}

function draw(){
    background(bg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    plateform.display();
    log5.display();
    sling.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();
   
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}

function preload() {

bg = loadImage("sprites/bg.png");
}

function mouseDragged() {
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}

function mouseReleased() {
sling.fly()

}