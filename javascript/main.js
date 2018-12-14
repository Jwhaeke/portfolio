function display() {
    document.getElementById("hide1").style.display = "block";
    document.getElementById("hide2").style.display = "block";
    playVid();
    
}

var vid = document.getElementById("loadScreen"); 

function playVid() { 
    vid.play(); 
} 
