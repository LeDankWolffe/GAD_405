
function setup() {



  console.log("Initialization: OK")
  createCanvas(600,600);
}

//Rendering function
function draw() {

  //variables holding map functions
  var mX = map(mouseX, 0, width, 0, 255);
  var mY = map(mouseY, 0, height, 0, 255);
  var Ym = map(mouseY, 0, width, 255, 0);
  var Xm = map(mouseX, 0, height, 255, 0);

  //opa = map(mouseX,0,600,0,255);


  background(0);

  //the squares and the changing color and opacity
  fill(255,0,0,mX)
  rect(0,0,width/2,height/2);

  fill(0,255,0,mY);
  rect(300,0,width/2,height/2);

  fill(255,250,0,Xm);
  rect(0,300,width/2,height/2);

  fill(0,255,246,Ym);
  rect(300,300,width/2,height/2);



  //fill(255,0,0);
  //rect(mouseX,200,64,64);
  //background(255, 0, 255);

}
