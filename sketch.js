var ob1, ob1i;
var next, ni;
var report, ri;
var score = 0;
var gameState = "PLAY";
var i2;

function preload()
{
	ob1i = loadImage("bag-removebg-preview.png");
	ni =  loadImage("next.jpg");
	ri = loadImage("report.png");
	ni = loadImage("next.jpg");
	i2 = loadImage("plastic-removebg-preview.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	ob1  = createSprite(700,350,10,10);
	ob1.addImage(ob1i);
	ob1.scale = 1.5;

	report = createSprite(200,200,10,1);
	report.addImage(ri);
	report.scale=0.8;

	next = createSprite(1100,200,10,1);
	next.addImage(ni);
	next.scale=0.8;


  
}


function draw() {
  background("lightgreen");

 

  textSize(25);
  text("Score: "+score, 200, 50);

	if(gameState==="PLAY"){
		 if(mousePressedOver(report)){
		 
	textSize(25);
	text("Score: "+score, 200, 50);
		 gameState = "END1";
         score  = score-5;
	 }
	}
	 if(mousePressedOver(next)){
		gameState = "nextOBJ";
		
	textSize(25);
	text("Score: "+score, 200, 50);
		score  = score+5;
	}
	if(gameState === "nextOBJ"){
		background("lightgreen");
        
	textSize(25);
	text("Score: "+score, 200, 50);
		ob1.addImage(i2);

	}
    

	 if(gameState==="END1"){
		 background("lightgreen");
		 ob1.destroy();
		 next.destroy();
		 report.destroy();
		 
		 textSize(30)
		text("Game Over, You Lose!", 500, 350);
		text("Score: "+ score, 500, 450);
		}
		if(gameState==="END2"){
			background("lightgreen");
			ob1.destroy();
			next.destroy();
			report.destroy();
			
			textSize(30)
		   text("Game Over, You Win! Score: "+score, 500, 350);

		   }
  
  drawSprites();
 
}



