class Box{
    constructor(x, y, width, height,angle) {
        var options = {
          //  'isStatic': false, 
          'restitution':0.4,
          'friction':0
         //'density':1.5
        }
        this.Visiblity = 255
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){   
       
          var pos =this.body.position;
          var angle = this.body.angle;
  
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(5);
          stroke("white");
          rect(0, 0, this.width, this.height);
         pop();  
        }
        else{
           
          World.remove(world, this.body);
          push()
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop(); 
            }
           
           
           }
         
       score() {
 
       if(this.visibility < 0 && this.visibility >- 105){

        score++;
      
       }
       
       }
     }