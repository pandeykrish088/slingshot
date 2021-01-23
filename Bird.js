class Bird extends Base {
  constructor(x,y) {
 super(x,y,50,50)
this.image = loadImage("sprites/bird.png")
  }

  display() {
    var be = this.body.position;
    //be.x = mouseX;
    //be.y = mouseY;
    super.display();
  }
}