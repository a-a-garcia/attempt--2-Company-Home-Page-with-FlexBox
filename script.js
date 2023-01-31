//slideshow text
/* var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n)
};

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
} */

/*JavaScript Explained
First, set the slideIndex to 1. (First picture)

Then call showDivs() to display the first image.

When the user clicks one of the buttons call plusDivs().

The plusDivs() function subtracts one or  adds one to the slideIndex.

The showDiv() function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex.

If the slideIndex is higher than the number of elements (x.length), the slideIndex is set to zero.

If the slideIndex is less than 1 it is set to number of elements (x.length).

ALSO - I edited the HTML so by default, all the images except for the first one is display:none so only the first image displays at first.*/

//slideshow images
var slideIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1
    };
  x[slideIndex-1].style.display = "block";

  setTimeout(carousel, 3000); // Change image every 2 seconds
}

carousel();

