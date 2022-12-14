muffin = ""
boyfriend = ""

left_wrist_x= 0
right_wrist_x=0
left_wrist_y = 0
right_wrist_y= 0 

function preload(){
muffin = loadSound("muffin.mp3")
boyfriend = loadSound("new.mp3")
}

function setup(){
    canvas = createCanvas(200,150)
    canvas.position(1025,160)
    video = createCapture(VIDEO)
    video.hide()
    posenet = ml5.poseNet(video, modelLoaded); 
    posenet.on('pose', gotPoses);   
}

function modelLoaded(){
    console.log('Posenet is initialized')
}

function gotPoses(results){
if(results.length > 0){
    console.log(results)
}
}

function draw(){
    image(video, 0,0, 200, 150)
}
