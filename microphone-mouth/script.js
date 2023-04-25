let audioIn,
    audioPlaying = false;

function setup() {
    let canvas = createCanvas(400, 400);
    audioIn = new p5.AudioIn();
    audioIn.start();
}

// FOR MIC TO WORK ON LOAD
function touchStarted() { getAudioContext().resume(); } 

function draw() {
    let volume = audioIn.getLevel();
    console.log(volume);
    background(155);
    ellipse(width / 2, height - 100, width - 200, volume * 2000);
    text('Tap me to start speaking!', width / 2, height - 20)
    textAlign(CENTER)
    
    // eyes!
    ellipse(width / 4, height / 4, 50, 50);
    ellipse(width * .75, height / 4, 50, 50);
}

