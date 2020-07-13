class Box {
    constructor(x, y, width, height) {
      var options = {
         isStatic: true,
         'friction':1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png");
      this.scale = 3;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      imageMode(CENTER);
      stroke("red");
      fill("red");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  }