function preload(){
  mitsu_button_image = loadImage("assets/mitsu_button.png");
  mitsu_sound = loadSound('assets/mitsu.mp3');
}

function setup(){
  canvas = createCanvas(mitsu_button_image.width, mitsu_button_image.height);
  canvas.parent('sketch-holder');
  background(0,0);

  mitsu_button = createSprite(width/2, height/2);
  mitsu_button.addImage(mitsu_button_image);
  mitsu_button.mouseActive = true;
  mitsu_button.onMousePressed = () => {
    tint(168);
    mitsu_sound.play();
  }
  mitsu_button.onMouseReleased = () => noTint();

  audioSetup();
}

function draw(){
  drawSprites();
}

function audioSetup(){
  masterVolume(1.0);
  mitsu_sound.setVolume(1.0);
  mitsu_sound.playMode('restart');
}