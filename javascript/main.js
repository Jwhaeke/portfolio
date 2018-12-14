//Future ideas -> When page has been visited before an returning to index.html
//remove autoplay, show background still, and return with a waiting screen


//After the background video has finished, show the screen and text
function display() {
    document.getElementById("hide2").style.display = "block";
    var vid = document.getElementById("loadScreen"); 
    vid.play(); 
    
}

var links = '<div class="icons"><a href="www.google.com"><i class="fas fa-user"></i></a><a href="www.google.com"><i class="fas fa-file-code"></i></a><a href="www.google.com"><i class="fas fa-power-off"></i></a></div>'


function projects() {
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").innerHTML = links;

}


