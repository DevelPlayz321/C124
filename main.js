var song_A = "";
var song_B = "";
var song_C = "";

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("Model is successfully loaded");
}

function gotPoses(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
}


