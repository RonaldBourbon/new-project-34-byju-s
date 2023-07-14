class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 5,
      density: 0.4,
    };
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
    rectMode(CENTER);
    fill("lightgreen");
    stroke("black");
    rect(0, 0, this.width, this.height);
    pop();
  }
}