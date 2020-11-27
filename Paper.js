class Paper{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.body = Matter.Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.image = loadImage("paper.png")
    }
    display(){
        var pos = this.body.position
        fill("pink");
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,80,80);
    }
}
    
