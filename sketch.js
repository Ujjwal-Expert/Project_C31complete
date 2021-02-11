const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var drops=[];
var maxDrop=100;
var rand;



function preload(){
    boyImg=loadImage("images/Walking Frame/walking_1.png");
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

}

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
        for(var i=0; i<maxDrop; i++){
            drops.push(new Drop(random(0,400),random(0,400),3));
        }
    }
    
    UDrop = new Drop(210,260,40);
    Matter.Body.setStatic(UDrop.body,true);
}

function draw(){
    background(0)
    Engine.update(engine);
    
    for(i=0; i<maxDrop; i++){
        drops[i].display();
        drops[i].updateY();
    }

    image(boyImg,100,200,220,220);
    //UDrop.display();

    
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(0,400),random(10,30),20,20);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1:thunder.addImage(thunder1);
                   break;
            case 2:thunder.addImage(thunder2);
                   break;
            case 3:thunder.addImage(thunder3);
                   break;
            case 4:thunder.addImage(thunder4);
                  default:break;   
        }
        thunder.scale=random(0.3,0.6);
        thunder.lifetime=50
        
    }
    drawSprites()
}   

