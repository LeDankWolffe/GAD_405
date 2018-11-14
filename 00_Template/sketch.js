function setup() {
  createCanvas(500,500);
    background(0,0,0);
    frameRate(30);

}

function draw() {
  //fill(216,213,197);
  customShape();
  setTimeout(function() {
  location.reload();
}, 10000);
  //for (var i = frame(300); i < frameRate; ++=); {
//console.log(x);
   }

  function customShape() {
    let size = random(200);
    let x = random(500);
    let y = random(500);

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


  }
