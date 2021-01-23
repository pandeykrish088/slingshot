class SlingShot {
constructor(bodyA,pointB) {
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.05,
length:20
}
this.pointB = pointB;
this.sling = Matter.Constraint.create(options);
World.add(world,this.sling);
    
}

fly() {
this.sling.bodyA = null;
}

display() {
if(this.sling.bodyA) {
var A = this.sling.bodyA.position;
var B = this.pointB;
line(A.x,A.y,B.x,B.y);
}
}
}