/*For slideshow*/
let slideIndex = 0;
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change 2000 to the number of milliseconds you desire between each image change
}

document.addEventListener("DOMContentLoaded", showSlides);



/*For the drop down menu*/
/* following along with https://www.geeksforgeeks.org/how-to-create-dropdown-list-using-javascript/ */
function show_container() {
    var container = document.getElementById("projects"); 
    /*changing container values on click: css .container{display = none;}  */
    if (container.style.display === "block") {
      container.style.display = "none";
    } 
    else {
      container.style.display = "block";
    }
    
    /*This is for if we don't take them to a new window*/
    window.onclick = function (event) { /*When someone clicks on the window*/
      if (!event.target.matches('.dropdown_button')) /*if someone clicks on the button*/
        document.getElementsByClassName('') /*get elements listed as projects*/
          .style.display = "block";
  
    }
  }
/* -----Andie-----------Nov14 */
/* Trialling JS website visitor counter */

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});

/* Trialling JS website visitor counter */
  /* -----Andie-----------Nov14 */
