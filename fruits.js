Img = "";
function preload(){
    Img = loadImage("fruit.jpeg");
}
function setup(){
    Canvas = createCanvas(640,420);
    Canvas.center();
}
function draw(){
    image(Img,0,0,640,420);
}
function back(){
    Window.location("index.html");
}