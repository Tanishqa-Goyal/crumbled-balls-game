class Ground {

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    
  }
    display(){
      push();
      rectMode(CENTER);
      stroke(255);
      fill(127);
      rect(this.x,this.y, this.w, this.h);
      pop();
    }
}
