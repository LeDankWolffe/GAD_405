function setup() {
  createCanvas(500,500);
    background(0,0,0);
    frameRate(30);
    // ^^^ Basic setup

}

function draw() {
  customShape(); //calling the shape drawing function

  //this is the refresh function, so every 10 seconds it will automatically refresh
  setTimeout(function() {
  location.reload();
}, 10000);
   }

  function customShape() {
    let size = random(200);
    let x = random(500);
    let y = random(500);
    // This determines the size and position of each individual circle

    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size,size);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.7,size*0.7);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.5,size*0.5);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.25,size*0.25);
    fill(random(255),random(255),random(255),random(255));
    ellipse(x,y,size*0.2,size*0.2);

    //every circle that is drawn within one another


  }
