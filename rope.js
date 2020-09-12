
class Rope {
    constructor(BodyA,pointB){
        var options={
            bodyA:BodyA,
            pointB:pointB,
            stiffness:0.1,
            length:1,
            
        }
        this.pointB=pointB;
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
            var pos1=this.body.bodyA.position;
            var pos2=this.pointB;
            strokeWeight(3);
            line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
    }

