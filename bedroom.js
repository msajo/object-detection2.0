Img = "";
status2 = "";
function preload(){
    Img = loadImage("bedroom.jpeg");
}
function setup(){
    Canvas = createCanvas(640,420);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}
function draw(){
    image(Img,0,0,640,420);
}
function back(){
    window.location ="index.html";
}
function modelLoaded(){
    console.log("ModelLoaded");
    status2 = true;
    objectDetector.detect(Img,gotposes);
}
function gotposes(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
}