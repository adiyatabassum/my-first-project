 
function setup()
{
createCanvas(609,600);
  background("yellow")

  box = createSprite(200,200,50,50);


  

 

}

function draw() 
 
{


   
  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("orange");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();

  

}

