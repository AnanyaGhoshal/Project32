class Snowball{

    constructor(x,y){
        var options={
            'isStatic':false,
            'restitution':1.2
                   
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);
        this.image = loadImage("ball3.png");
        this.visiblity = 255;
    }
    display(){
        if(this.body.speed<10){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            imageMode(CENTER);
            image(this.image,0,0,this.radius*7,this.radius*7)
            pop();
        
        }else{
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity - 5;
            tint(255,this.visiblity);
            image(this.image,this.body.position.x,this.body.position.y, 70, 70)
            pop();
            
            
        }                  
        
    }
}