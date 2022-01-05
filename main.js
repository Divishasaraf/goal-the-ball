const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaletoWidth(50);
		hole.obj.scaletoHeight(50);
		hole.obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
	ball_obj = Img;
	ball_obj.scaletoWidth(50)
	hole.obj.scaletoHeight(50);
	hole.obj.set({
	top:hole_y,
	left:hole_x
	});
  canvas.add(ball_obj);
   });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
	}
	document.getElementById("hd3").innerHTML="Game Over!!!";
	document.getElementById("myCanvas").style.borderColor="red";

	document.getElementById("hd3").innerHTML="You have hit the Goal!!!";
	document.getElementById("myCanvas").style.borderColor="green";
	

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		ball_y = ball_y + block_image_height;
		 console.log("block image height = " + block_image_height);
		 console.log("When Up arrow is pressed, X = " + ball_x + ", Y = "+ball_y )
	}

	function down()
	{
		 ball_y = ball_y + block_image_height;
		 console.log("block image height = " + block_image_height);
		 console.log("When Down arrow is pressed, X = " + ball_x + ", Y = "+ball_y )
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_y = ball_y + block_image_height;
		  console.log("block image height = " + block_image_height);
		  console.log("When Left arrow is pressed, X = " + ball_x + ", Y = "+ball_y )
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_y = ball_y + block_image_height;
		 console.log("block image height = " + block_image_height);
		 console.log("When Right arrow is pressed, X = " + ball_x + ", Y = "+ball_y )
		}
	}
	
}

