//Future ideas -> When page has been visited before an returning to index.html
//remove autoplay, show background still, and return with a waiting screen


//After the background video has finished, show the screen and text

function display() {
    document.getElementById("hide2").style.display = "block";
    var vid = document.getElementById("loadScreen"); 
    vid.play(); 
    
}

var links = '<div class="icons"><a onmouseout="lightOff()" onmouseover="lightUp()" id="icon1" href="./pages/cv.html" target="_blank"><i class="fas fa-user"></i></a><a onmouseout="lightOff2()" onmouseover="lightUp2()" id="icon2" href="./pages/projects.html" target="_blank"><i class="fas fa-file-code"></i></a><a onmouseout="lightOff3()" onmouseover="lightUp3()" id="icon3" onclick="return false;" href=""><i onclick="walked()" class="fas fa-power-off"></i></a></div>'

function visited() {
    document.getElementById("hide2").style.display = "block";
    projects();
}

function projects() {
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").innerHTML = links;
}


function lightUp() {
    document.getElementById("about").style.color = "#FF5733";
}

function lightOff() {
    document.getElementById("about").style.color = "black";

}

function lightUp2() {
    document.getElementById("projects").style.color = "#FF5733";

}

function lightOff2() {
    document.getElementById("projects").style.color = "black";

}

function lightUp3() {
    document.getElementById("off").style.color = "#FF5733";

}

function lightOff3() {
    document.getElementById("off").style.color = "black";

}

// var leave = '<div><video muted id="walk" onended="alert("mooh")><source src="./vid/leave.mp4" type="video/mp4"></video></div>';
var leaveVid = './vid/leave.mp4'

function walked() {
    document.getElementById("hide2").style.display = "none";
    document.getElementById("hide1").style.display = "none";
    document.getElementById("bgvideo").style.display = "none";
    console.log(document.getElementById("walkVid"));
    document.getElementById("walkVid").style.visibility = "visible";
    var start = document.getElementById("walkVid"); 
    start.play(); 
    
}


function showstuff() {
    document.getElementById("walkVid").style.visibility = "hidden";
    document.getElementById("gone").style.visibility = "visible";
    var ending = document.getElementById("gone"); 
    ending.play(); 
}
