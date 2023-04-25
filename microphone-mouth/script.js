let audioIn;

function setup() {
    createCanvas(400, 400);
    audioIn = new p5.AudioIn();
    audioIn.start();
}

function draw() {
    let volume = audioIn.getLevel();
    console.log(volume);
    background(155);
    ellipse(width / 2, height - 100, width - 200, volume * 1500);
    
    // eyes!
    ellipse(width / 4, height / 4, 50, 50);
    ellipse(width * .75, height / 4, 50, 50);
}
