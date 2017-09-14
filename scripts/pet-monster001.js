var width = 800;
var height = 600;
var monsterX = width /2;
var monsterY = height /2;
var monsterSize = 100;
var hatched = false;
var eggClicks = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(100,100,100);
  if(hatched){
    drawMonster();
  }else{
    drawEgg();
  }
}

function drawEgg(){
  fill(246,244,240);
  noStroke();
  ellipse(monsterX, monsterY, monsterSize, monsterSize + 25);
  text("Click the egg three times to hatch it.", 20 ,height - 40);
}


function drawMonster(){
  noStroke();
  fill(0,200,0);
  //Body
  ellipse(monsterX, monsterY, monsterSize, monsterSize);
  //Eye
  fill(255,255,255);
  ellipse(monsterX, monsterY - 20, monsterSize / 2, monsterSize / 2);
  fill(0,0,0);
  ellipse(monsterX, monsterY - 20, monsterSize / 8, monsterSize / 8);
  //Smile
  stroke(0,100,0);
  strokeWeight(3);
  line(monsterX - 25,monsterY + 20,monsterX + 20,monsterY + 25);
}

function drawEgg(){
  fill(255,255,255);
  noStroke();
  ellipse(monsterX, monsterY, monsterSize, monsterSize + 25);
  text("Click the egg three times to hatch it.", 20 ,height - 40);
}

function monsterClicked(){
  if (hatched == false){
    eggClicks++;
  }else{

  }
  if (eggClicks == 3){
    hatched = true;
  }
}

function mouseClicked(){
  var dx = abs(mouseX - monsterX);
  var dy = abs(mouseY - monsterY);

  if (dx < monsterSize/2 && dy < monsterSize/2){
    monsterClicked();
  }
}
