nosex = 0;
nosey = 0;
difference = 0;

function setup() {

  canvas = createCanvas(640, 480);
  canvas.position(700, 120);

  video = createCapture(VIDEO);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}



function draw() {
  colorMode(HSB);
background('white')
  fill(255, 204, 100);
  square(nosex , nosey, difference);

}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results)
    leftWristx = results[0].pose.leftWrist.x;
    leftWristy = results[0].pose.leftWrist.y;
    rightWristx = results[0].pose.rightWrist.x;
    rightWristy = results[0].pose.rightWrist.y;
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    difference = leftWristx - rightWristx;
  }
}

function modelLoaded() {
  console.log('PoseNet is Initialised');
}