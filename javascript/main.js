//Future ideas -> When page has been visited before an returning to index.html
//remove autoplay, show background still, and return with a waiting screen


//After the background video has finished, show the screen and text
function display() {
    document.getElementById("hide2").style.display = "block";
    var vid = document.getElementById("loadScreen"); 
    vid.play(); 
    
}

var links = '<div class="icons"><a onmouseout="lightOff()" onmouseover="lightUp()" id="icon1" href="www.google.com"><i class="fas fa-user"></i></a><a onmouseout="lightOff2()" onmouseover="lightUp2()" id="icon2" href="www.google.com"><i class="fas fa-file-code"></i></a><a onmouseout="lightOff3()" onmouseover="lightUp3()" id="icon3" href="www.google.com"><i class="fas fa-power-off"></i></a></div>'


function projects() {
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").innerHTML = links;

}


function lightUp() {
    document.getElementById("about").style.color = "tomato";
}

function lightOff() {
    document.getElementById("about").style.color = "black";

}

function lightUp2() {
    document.getElementById("projects").style.color = "tomato";
}

function lightOff2() {
    document.getElementById("projects").style.color = "black";

}

function lightUp3() {
    document.getElementById("off").style.color = "tomato";
}

function lightOff3() {
    document.getElementById("off").style.color = "black";

}