var canvas,cube;
var music,block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3",);
}


function setup(){
    canvas = createCanvas(800,600);

    music.play;

    block1=createSprite(10,10,200,20);
    block1.shapeColor("blue");

    block2=createSprite(210,10,200,20);
    block2.shapeColor("red");

    block3=createSprite(410,10,200,20);
    block3.shapeColor("green");

    block4=createSprite(610,10,200,20);
    block4.shapeColor("yellow");

    cube=createSprite(random(20,750),400,20,20);
    cube.shapeColor("white")
    cube.velocityX = 4;
    cube.velocityY = 5;
    cube.bounceOff(edges);
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    drawSprites();

    //add condition to check if box touching surface and make it box

    if(cube.isTouching(block1) && cube.bounceOff(block1)){
        cube.shapeColor("blue")
        cube.velocityY = 6;
    }

    if(cube.isTouching(block2)){
        cube.shapeColor("red")
        cube.velocityY =0;
        music.stop();
    }

    if(cube.isTouching(block3) &&  cube.bounceOff(block3)){
        cube.shapeColor("green")
        cube.velocityY = 7;
    }

    if(cube.isTouching(block4)){8
        cube.shapeColor("yellow")
        cube.velocityY = 0;
        music.stop();
    }
    
}
