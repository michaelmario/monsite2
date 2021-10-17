 var myIndex = 0;
  carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "block";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].classList.add('animate-left');  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
