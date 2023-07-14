class Rope {
 constructor(BodyA, PointB) {
 var options = {
    bodyA:BodyA,
    pointB:PointB,
    stiffness:1.5,
    length:250
   }
 this.pointB = PointB;
 this.rope = Constraint.create(options);
 World.add(world,this.rope);
  }
 display() {
 var pointA = this.rope.bodyA.position;
 var pointB = this.pointB;

 push();
 stroke("brown");
 strokeWeight(3);
 line(pointB.x,pointB.y,pointA.x,pointA.y);
 pop();


 }
}