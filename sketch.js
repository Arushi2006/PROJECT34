var dog,happyDog,database,food,foodStock;
var database;
function preload()
{
  dogImage=loadImage("images/Dog.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(1200, 1200);
  database=firebase.database();
  dog=createSprite(400,450,50,50);
  dog.addImage(dogImage);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
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
    dog.addImage(happyDogImage);
  }
  else
  {
    dog.addImage(dogImage);
  }
  //add styles here
   
} 
 function writeStock(x)
 {
   if(x<=0)
   {
     x=0
   }

   else
   {
     x=x-1;
   }
  database.ref('/').update({
    food:x
  })
}

function readStock(data)
 {
   food=data.val();
 }
