new p5(
  p => {
    let mitsu_button_image;
    let mitsu_sound;

    p.preload = () => {
      mitsu_button_image = p.loadImage("assets/mitsu_button.png");
      mitsu_sound = p.loadSound('assets/mitsu.mp3');
    }
  
    p.setup = () => {
      p.createCanvas(mitsu_button_image.width, mitsu_button_image.height);
      p.background(0,0);
    
      mitsu_button = p.createSprite(p.width/2, p.height/2);
      mitsu_button.addImage(mitsu_button_image);
      mitsu_button.mouseActive = true;
      mitsu_button.onMousePressed = () => {
        p.tint(168);
        mitsu_sound.play();
      }
      mitsu_button.onMouseReleased = () => p.noTint();
    
      audioSetup();
    }

    p.draw = () => {
      p.drawSprites();
    }

    const audioSetup = () => {
      p.masterVolume(1.0);
      mitsu_sound.setVolume(1.0);
      mitsu_sound.playMode('restart');
    }
  },
  document.getElementById("mitsu")
);

new p5( p => {
  let mitsu3_button_image;
  let mitsu3_sound;

  p.preload = () => {
    mitsu3_button_image = p.loadImage("assets/mitsu3_button.png");
    mitsu3_sound = p.loadSound('assets/mitsu3.mp3');
  }
 
  p.setup = () => {
    p.createCanvas(mitsu3_button_image.width, mitsu3_button_image.height);
    p.background(0,0);
  
    mitsu3_button = p.createSprite(p.width/2, p.height/2);
    mitsu3_button.addImage(mitsu3_button_image);
    mitsu3_button.mouseActive = true;
    mitsu3_button.onMousePressed = () => {
      p.tint(168);
      mitsu3_sound.play();
    }
    mitsu3_button.onMouseReleased = () => p.noTint();
  
    audioSetup();
  }
  
  p.draw = () => {
    p.drawSprites();
  }
  
  const audioSetup = () => {
    p.masterVolume(1.0);
    mitsu3_sound.setVolume(1.0);
    mitsu3_sound.playMode('restart');
  }
},
document.getElementById("mitsu3")
);