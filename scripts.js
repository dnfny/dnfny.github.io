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
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  

function scrolldown(){
// Get the container element
  var blockscontainer = document.getElementById("blocks");
  console.log("hi im in here");
  // Get all blocks inside the container
  var blocks = blockscontainer.getElementsByClassName("block");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  } 
}

function scrollup(){
  // Get the container element
    var blocks = document.getElementById("blocks");
    console.log("hi im in here");
    // Get all blocks inside the container
    var blocks = blocks.getElementsByClassName("block");
  
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className -= " active";
      });
    } 
  }