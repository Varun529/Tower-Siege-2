class Ball{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2
        }
        
        this.body= Bodies.circle(x,y,25,options);
        //this.width=25;
        //this.height=25;
        this.radius=25;
        World.add(world,this.body);
        
    }
    display(){
       
       var pos =this.body.position; 
       
        //rect(pos.x, pos.y, this.width, this.height);
        
        push();

        translate(pos.x, pos.y);
        
        fill("green");
        circle(0,0,this.radius*2);
        
        
        pop();
        
    }
}