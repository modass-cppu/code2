var fixrectangle, movingrectangle, gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(800,400);
  fixrectangle = createSprite(400, 200, 50, 70);
  fixrectangle.shapeColor = "green"
  movingrectangle = createSprite(400, 400, 50, 70);
  movingrectangle.shapeColor = "green"
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green"
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green"
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green"
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green"
  //fixedrectangle.debug = true;
  //movingrectangle.debug = true;
}

function draw() {
  background(255,255,255); 
  movingrectangle.y = World.mouseY;
  movingrectangle.x = World.mouseX;

  if(isTouching(movingrectangle, fixrectangle)){

    movingrectangle.shapeColor = "red"
    fixrectangle.shapeColor = "red"

  }
  else if(isTouching(movingrectangle, gameObject1)){

    movingrectangle.shapeColor = "blue"
    gameObject1.shapeColor = "blue"

  }
  else if(isTouching(movingrectangle, gameObject2)){

    movingrectangle.shapeColor = "blue"
    gameObject2.shapeColor = "blue"

  }
  else if(isTouching(movingrectangle, gameObject3)){

    movingrectangle.shapeColor = "blue"
    gameObject3.shapeColor = "blue"

  }
  else if(isTouching(movingrectangle, gameObject4)){

    movingrectangle.shapeColor = "blue"
    gameObject4.shapeColor = "blue"

  }

  else{
    movingrectangle.shapeColor = "green"
    fixrectangle.shapeColor = "green"
  }
  drawSprites();
  
}
function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object1.height/2 + object2.height/2){

    return true
  }
  else{
    return false
  }
}