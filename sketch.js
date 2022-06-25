
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside;
var rightside;

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ground = new Ground(100, 600,100, 20);
	rightside = new Ground(1350, 500, 20, 1000);
	leftside = new Ground(1100, 500, 20, 1000);

	ball = Bodies.circle(200, 45, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);

	ellipseMode(RADIUS);
	rectMode(CENTER);
}

function keypressed() {
	if (keycode === UP_ARROW)
		Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 });
}


function draw() {

	background("black");

	ground.display();
	rightside.display();
	leftside.display();
	ellipse(ball.position.x, ball.position.y, 20);
	//Engine.update(engine);

	drawSprites();

}


