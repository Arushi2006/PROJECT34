var dog,happyDog,database,food,foodStock;
var database;
function preload()
{
  dogImage=loadImage("images/dog.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(400,450,50,50);
  dog.addImage(dogImage);
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
    happyDog=addImage(happyDogImage);
  }
  //add styles here
   
} 
 function writeStock(x)
 {
   if(food<0)
   {
     food=0
   }

   else
   {
     food=food-1;
   }
  database.ref('food/foodStock').update({
    food:x
  })
}

function readStock(data)
 {
   food=data.val();
   food.x=position.x;
   food.y=position.y;
   }


