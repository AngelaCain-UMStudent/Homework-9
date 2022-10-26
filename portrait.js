function setup()
{
    createCanvas(400, 400);
}

function draw()
{
    background(240);
    textSize(18)
    text("The Self Portraiture",10,15);


     
     // head
    fill(217, 204, 145);
    ellipse(200, 150, 150, 175);
   
    // eyes
    strokeWeight(2);
    fill(255); // white
    ellipse(170, 143, 50, 40); // eye shapes
    ellipse(230, 143, 50, 40);
    fill(58, 71, 133); // eye color
    ellipse(170, 143, 20, 22); // left pupil
    ellipse(230, 143, 20, 22); // right pupil
    
    
    // nose
    fill(178, 179, 123)
    arc(198, 175, 25, 15, 270, 90);


    
    // mouth
    fill(179, 127, 123);
    arc(200, 192, 50, 50, 0, 160);

    // eyebrows
    strokeWeight(3);
    fill(64, 42, 24);
    line(150, 115, 175, 115);
    line(225, 115, 250, 115);

    fill(24, 64, 63);
    strokeWeight(4)
    textSize(25);
    text("Angela Cain", 100, 350);


}