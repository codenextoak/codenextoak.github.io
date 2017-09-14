var w = 800;
var h = 600;
var monsterX = w/2;
var monsterY = h/2;
var monsterSize = 100;

//States
var eggClicks = 0;
var hatched = false;
var smiling = false;
var blinking = false;

//Joke Vars
var joke = 0;
var jokes = ["There's no 'I', in denial", "Boneless Pizza", "Why'd the chicken cross\nthe road?",
  "A joke becomes a dad joke\nwhen the punchline is apparent", "Does the name Pavlov ring a bell?"];

//Timer Vars
var timer = 0;
var lastSecond;
var blinkTimer = 0;
var blinkLength = 6;

function setup(){
 createCanvas(800,600);
}

function draw(){
  updateTimer();

  background(100,100,100);
  if(hatched){
    drawMonster();
  }else{
    drawEgg();
  }
  checkKeyboard();
}

function drawMonster(){
  noStroke();
  fill(0,200,0);
  //Body
  ellipse(monsterX,monsterY,monsterSize,monsterSize);
  //Eye
  if(blinking == true){
    fill(0,50,0);
    ellipse(monsterX,monsterY-20,monsterSize/2,monsterSize/2);
  } else{
    fill(255,255,255);
    ellipse(monsterX,monsterY-20,monsterSize/2,monsterSize/2);
    fill(0,0,0);
    ellipse(monsterX,monsterY-20,monsterSize/8,monsterSize/8);
  }

  //Mouth
  if(smiling == true){
    stroke(0,100,0);
    strokeWeight(3);
    //Mouth Shape
    fill(0,100,0);
    noStroke();
    arc(monsterX,monsterY+20,50,50,0, PI);
    //teeth
    fill(255,255,255);
    rect(monsterX-15,monsterY+20,10,10);
    rect(monsterX+5,monsterY+20,10,10);
  }else{
    stroke(0,100,0);
    strokeWeight(3);
    line(monsterX-25,monsterY+20,monsterX+20,monsterY+25);
  }
  fill(0,0,0);
  text("Click the monster to tickle her.", 20 ,h-40);
}

function drawEgg(){
  fill(255,255,255);
  noStroke();
  ellipse(monsterX,monsterY,monsterSize,monsterSize+25);
  text("Click the egg three times to hatch it.", 20 ,h-40);
}

function speak(msg){
  noStroke();
  //Text Box
  fill(255,255,255);
  rect(monsterX+10, monsterY-150, 220, 50);
  //Text Box Arrow
  triangle(monsterX+10, monsterY-100, monsterX+20+30,monsterY-100,monsterX+20+10,monsterY-90);
  //Text
  fill(0,0,0);
  text(msg,monsterX+15,monsterY-135);
}

function monsterClicked(){
  if (hatched == false){
    eggClicks++;
  }

  if(hatched == true){
    smiling = true;
  }

  if (eggClicks == 3){
    hatched = true;
  }
}

function mousePressed(){
  var dx = abs(mouseX - monsterX);
  var dy = abs(mouseY - monsterY);
  if (dx < monsterSize/2 && dy < monsterSize/2){
    monsterClicked();
  }
}

function mouseReleased(){
 smiling = false;
}

function checkKeyboard(){
   if(keyIsPressed == true){
    if(key == ' '){
      speak("What's good?!");
    }
    if(key == 'j'){
      speak(jokes[joke]);
    }
  }
}

function keyReleased(){
 chooseNewJoke();
}

function chooseNewJoke(){
  joke = Math.floor(random(0,jokes.length));
}

function updateTimer(){
    if(lastSecond != second()){
      lastSecond = second();
      blinkTimerUpdate();
    }
}

function blinkTimerUpdate(){
   blinkTimer++;
   if(blinkTimer == blinkLength){
     blinking = true;
   }

   if(blinkTimer == blinkLength+1){
     blinking = false;
     blinkTimer = 0;
   }
}
