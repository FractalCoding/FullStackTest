let balls = [];
function setup() {
  createCanvas(1000, 1000);
  colorMode(HSB, 255);
  for(let i=0; i < 3000; i++){
    balls.push(new Ball(5, random(width), random(height)));
  }
}

function draw() {
  background(0);
  for(let i = 0; i < balls.length; i++){
    balls[i].display();
    balls[i].move();
  }
  
}

class Ball{
  constructor(diam,x,y,vel){
    this.diam = diam;
    this.x = x;
    this.y = y;
    this.vel = vel;
  }
  move() {
    this.vel = 30/(dist(this.x, this.y, mouseX,mouseY)+1);
    if(this.x > mouseX){
      this.x += this.vel;
      if(this.x >= width)
        this.x -=10 ;
    }
    if(this.x <= mouseX){
      this.x -= this.vel;
      if(this.x <= 1)
      this.x +=10;
    }
    if(this.y > mouseY){
      this.y += this.vel;
      if(this.y >= height)
        this.y -=10 ;
    }
    if(this.y <= mouseY){
      this.y -= this.vel;
      if(this.y <= 1)
        this.y +=10;
    }
    this.y += random(-3,3);
    this.x += random(-3,3);
  }
  display() {
    noStroke();
    fill(map(this.vel,0,2.5,0,255),255,255);
    ellipse(this.x, this.y, this.diam, this.diam);
  }

}
