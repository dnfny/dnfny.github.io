function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }


  function myFunction() {
    var x = document.getElementById("mobileLinks");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
  }

  function landingGo() {
    
      var x = document.getElementById("landing");
        x.style.display = "none";
      var y = document.getElementById("sidenav");
        y.style.zIndex = "0";
      console.log("made it mama")
  }

function collapsibleAction(){
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}

function scrollDown(){
// Get the container element
  var blocksContainer = document.getElementById("blocks");
  console.log("hi im in here");
  // Get all blocks inside the container
  var blocks = blocksContainer.getElementsByClassName("block");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } 
}

function scrollUp(){
  // Get the container element
    var blocksContainer = document.getElementById("blocks");
    console.log("hi im in here");
    // Get all blocks inside the container
    var blocks = blocksContainer.getElementsByClassName("block");
  
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className -= " active";
      });
    } 
  }