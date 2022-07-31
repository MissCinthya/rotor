
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine, world;

var piso;
var rotator1;




function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    angleMode(DEGREES);
    angle=0;


    
    var particle_options = {
      restitution:0.4,
      friction:0.02
    }
    button = createImg('New Piskel-1.png.png');
    button.position(20,30);
    button.size(50,50);
    button.mousePressed(rotorangulo);

    
    piso = new barra(525,790,1050,10,angle);

    rotator1 = new barra(525,400,100,30,angle);
    


}

function draw(){
  background("lightgreen");
  piso.show();
  rotator1.show();

  Engine.update(engine);
 
 
    
}
function rotorangulo(){
  //angle += 45;
  if(angle<100 ){
    rotator1.giro();
  }
 
  
}

