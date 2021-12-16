class Boat {

  constructor(x, y, width, height,boatPos) {
    var options = {
      restitution : 0.8
    };
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos
    this.Image = loadImage("assets/boat.png")
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER)
    image(this.Image,0,this.boatPosition,this.width,this.height) 
    pop();
  }
}
