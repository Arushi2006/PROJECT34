//Create variables here
var dog,happyDog,database,food,foodStock;
function preload()
{
  dog=loadImage("images/dog.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(400,450,50,50);
  dog.addImage("dog.png");
  foodStock=database.ref('food');
  foodStock.on("20",readStock);
  
}


function draw() {  
   background(rgb(46,139,87));
  drawSprites();
     
textSize(25);
fill("white");
stroke(20);
text("NOTE: PRESS UP_ARROW KEY TO FEED DRAGO MILK",220,220);

  if(keyWentDown(UP_ARROW))
  {
    writeStock(food);
    dog.aadImage("images/dog.png");
  }
  else
  {
    happyDog=addImage("images/dogImg1.png");
  }
  //add styles here
   
}
 function readStock(data)
 {
   food=data.val();
 }
  
 function writeStock(x)
 {
   if(x<0)
   {
     x=0
   }

   else
   {
     x=x-1;
   }
  database.ref('/').update({food:x})
}

