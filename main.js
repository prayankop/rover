mars_images = [
    "mars1.jpg",
    "mars2.jpg",
    "mars3.jpg",
    "mars4.jpg"
]

random_number = Math.floor(Math.random() * 4);

background_image = mars_images[random_number];
rover_image = "rover.png";

rover_height = 100;
rover_width = 150;

rover_x = 20;
rover_y = 20;

function add() {
background_imgtag = new Image();
background_imgtag.onload = uploadBackground;
background_imgtag.src = background_image;

rover_imgtag = new Image();
rover_imgtag.onload = uploadrover;
rover_imgtag.src = rover_image;
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function uploadBackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}

window,addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        up();
        console.log("up");
    }

    if (keyPressed == '40'){
        down();
        console.log("down");    
    }

    if (keyPressed == '37'){
        left();
        console.log("left");
    }

    if (keyPressed == '39'){
        right();
        console.log("right");
    }
}
function up() 
{

    if (rover_y >=0)
    {
        rover_y -= 10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down() 
{

    if (rover_y <=500)
    {
        rover_y += 10;
        console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() 
{

    if (rover_x >=0)
    {
        rover_x -= 10;
        console.log("When left arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right() 
{

    if (rover_x <=700)
    {
        rover_x += 10;
        console.log("When down arrow is pressed, x = " + rover_x + " y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}