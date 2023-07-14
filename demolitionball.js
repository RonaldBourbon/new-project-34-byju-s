class Ball {
 constructor(x,y,width,height) {
  var options = {
 density:1,
 frictionAir:0.005
  }
 this.body = Bodies.rectangle(x, y, width, height, options);
 World.add(world, this.body);
 this.width = width;
 this.height = height;
 }
 display() {
    var angle = this.body.angle;
    var position = this.body.position;
    push();
    translate(position.x, position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("black");
    stroke("white");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}