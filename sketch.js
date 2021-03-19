//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//to create the sprite objects
var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var thunder;
var thunderImg1, thunderImg2, thunderImg3, thunderImg4;
var thunderCreatedFrame;

//to preload the images
function preload(){

    thunderImg1 = loadImage("images/thunderbolt/1.png");
    thunderImg2 = loadImage("images/thunderbolt/2.png");
    thunderImg3 = loadImage("images/thunderbolt/3.png");
    thunderImg4 = loadImage("images/thunderbolt/4.png");
    
}

function setup(){

    //to create the canvas
    var canvas = createCanvas(500, 700);

    //to create the engine and world
    engine = Engine.create();
    world = engine.world;

    //to create the drops
    for(var i = 0; i < maxDrops; i++){

        drops.push(new Drops(random(0,500), random(0,500)));

     }

     //to create the umbrella
     umbrella = new Umbrella(200, 500);
    
}

function draw(){

    //to give the background
    background("black");

    //to update the engine
    Engine.update(engine);

    //to display and update the drops
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    //to display the umbrella
    umbrella.display();

    //to create the thunder
    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){

        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);

        switch(rand){

            case 1: Thunder.addImage(thunderImg1);
            break;
            case 2: Thunder.addImage(thunderImg2);
            break; 
            case 3: Thunder.addImage(thunderImg3);
            break;
            case 4: Thunder.addImage(thunderImg4);
            break;
            default: break;

        }

        Thunder.scale = (0.3, 0.6);

    }

    //to destroy the thunder
    if(thunderCreatedFrame + 10 === frameCount && Thunder){

        Thunder.destroy();

    }

    //to draw the objects
    drawSprites();
    
}   