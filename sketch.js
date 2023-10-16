let devilmonkey;
let blkcat;
let witchbunny;
let bg;

let banana = {
  x:200,
  y:50,
  display:true,
  pickup:false,
  
  resetPosition(){
    this.x=200;
    this.y=50;
  },
  
  moveBanana: function(){
    this.x = mouseX;
    this.y = mouseY;
    
    this.pickup=true;
  },
  
  displayBanana: function(){
    if(this.display===true){
    fill("pink")
    circle(this.x,this.y,30);
    }
 
  },
  reset: function(){
     this.display=false;
     this.pickup=false;
     this.resetPosition();
     this.displayBanana();
  }
  
}

let monkey = {
  x:200,
  y:200,
  size:150,
  display:function() {
    noStroke()
    noFill()
    circle(this.x,this.y,this.size);
  }
  
}

let cat = {
  x:40,
  y:250,
  size:150,
  display:function() {
    noStroke()
    noFill()
    circle(this.x,this.y,this.size);
  }
  
}

let bunny = {
  x:330,
  y:250,
  size:150,
  display:function() {
    noStroke()
    noFill()
    circle(this.x,this.y,this.size);
  }
  
}

function setup() {
  createCanvas(400, 400);
  devilmonkey = createImg('devilmonkey.png')
  monkeysound = loadSound('monkeysound.wav')
  blkcat = createImg('blkcat.png')
  catsound = loadSound('catsound.wav')
  witchbunny = createImg('witchbunny.png')
  bunnysound = loadSound('bunnysound.mp3')
  bg = loadImage('halloweenbg.png')
  
}

function draw() {
  background(bg);
  fill("#white");
  textSize(15);
  textStyle(BOLD);
  textFont('Arial');
  text('click and drag gumball to a furry friend', 60, 20);
  fill("#FF8E00");
  textSize(30);
  textStyle(BOLD);
  textFont('Arial');
  text('TRICK OR TREAT!', 80, 385);
  devilmonkey.position(120,115)
  devilmonkey.size(160, 220)
  blkcat.position(25,200)
  blkcat.size(125,150)
  witchbunny.position(250,170)
  witchbunny.size(135,175)
  monkey.display();
  cat.display();
  bunny.display()

  banana.displayBanana();
  if(banana.pickup===true){
     banana.moveBanana();
  }
}

function mousePressed(){
    
    if(!banana.display){
      banana.display=true;
    }

    //Below you check to see if the mouse is near the banana AND that pickup is set to false
    else if(dist(mouseX,mouseY,banana.x,banana.y)<20 && !banana.pickup){
      fill("red");
      banana.pickup=true;
    }
  
    //Below is where you would check to make sure banana pickup is true and also use dist() to check if banana has touched monkey
    else if(banana.pickup && dist(banana.x,banana.y,monkey.x,monkey.y)<monkey.size/2){
     monkeysound.play();    
     banana.reset();
    }
  
    else if(banana.pickup && dist(banana.x,banana.y,cat.x,cat.y)<cat.size/2){ 
    catsound.play();
    banana.reset();
    }
  
    else if(banana.pickup && dist(banana.x,banana.y,bunny.x,bunny.y)<bunny.size/2){ 
    bunnysound.play();
    banana.reset();
    }
            
  
    else {
    banana.pickup=false;
      
    }  
}
