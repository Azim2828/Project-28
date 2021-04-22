class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,		
			restitution:0.5,
			friction:1,
			density:1.2
			}
			this.r=r
			this.x = x
			this.y = y
			this.image = loadImage("stone.png");
			this.body = Bodies.circle(this.x, this.y, this.r-20/2, options);
World.add(world,this.body);
	

	}
	display(){
		
var pos = this.body.position;

push();
translate(pos.x,pos.y);

imageMode(CENTER)
rectMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
	}
}