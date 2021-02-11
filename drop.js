class Drop{
    constructor(x,y,radius){
        var options = {
            restitution:0.08,
            friction:1,
            density:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
   /* display(){
        var pos  = this.body.position;
        push();
        //translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(pos.x,pos.y,10,10);
        pop();
    }*/
    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400), y:0});
            this.body.speed=0;
        }
    }
}