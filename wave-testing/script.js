let song,
    amp,
    x,
    volArray = [];

function preload() {
    soundFormats('mp3');
    song = loadSound('./music/sample-mario')
}

function setup() {
    createCanvas(400, 400);
    song.play();
    amp = new p5.Amplitude()
}

// FOR MIC TO WORK ON LOAD
function touchStarted() { getAudioContext().resume(); } 

function draw() {
    background(0);
    let volume = amp.getLevel();
    volArray.push(volume)
    stroke(255)
    noFill()
    push()
    beginShape()
    for(let i = 0; i < volArray.length; i++) {
        let y = map(volArray[i], 0, 1, height / 2, 0)
        vertex(i, y)
    }
    
    if(volArray.length > width - 50) {
        translate(- (volArray.length - width + 50), 0)
    }
    
    endShape()
    pop()
    stroke(255, 0, 0, 255)
    x = volArray.length < width - 50 ? volArray.length : width - 50
    line(x, 0, x, height)
    text('Tap me to start drawing!', width / 2, height - 20)
    textAlign(CENTER)
}

