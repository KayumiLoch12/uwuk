class Red_block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.01,
            'friction':4.0,
            'density':5.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
}