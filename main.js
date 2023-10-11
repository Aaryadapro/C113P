function preload()
{
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    alert("Verify you are human");
}

function draw()
{
   
    image(video, 50, 50, 500, 400);
    fill(0, 100, 70);
    stroke(128, 0, 0);
    rect(23, 12, 560, 20); 
    rect(568, 22, 20, 460);
    rect(13, 22, 20, 460);
    rect(23, 468, 560, 20); 
    fill(255, 215, 0);
    stroke(128, 0, 0);
    circle(23, 22, 40);
    circle(23, 478, 40);
    circle(578, 478, 40);
    circle(578, 22, 40);
}

function take_Snapshot()
{
    save('student_name.png');
}

