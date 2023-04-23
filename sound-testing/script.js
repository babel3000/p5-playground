let sound,
    amp,
    size;

function preload() {
    soundFormats('mp3');
    sound = loadSound('./music/sample-mario', startSound);
}
function setup() {
    createCanvas(400, 400);
    amp = new p5.Amplitude();
}

function draw() {
    background(220);
    size = map(amp.getLevel(), 0 , 1, 10, width)
    console.log()
    fill(255, 0, 0)
    ellipse(width / 2, height / 2, size, size)
}

function startSound() {
    document.querySelector('canvas').focus();
}

function keyTyped() {
    if (key === ' ') {
        if (sound.isPlaying()) {
            sound.pause()
        } else {
            sound.play()
        }
    }
}