/*----------------
  Owner: Tali Jonker
  Date: Nov 19 (v2)
  From: following along with https://www.geeksforgeeks.org/how-to-create-dropdown-list-using-javascript/
        and https://www.w3schools.com/howto/howto_js_dropdown.asp
------------------*/  

/*For the drop down menu*/
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


/* /*--FOOTER SUBSCRIBE BUTTON--------------
  Owner: Andie Herstek
  Date: Nov Dec 3 (v3)
  From: w3 schools JS */


  function subscribe() {
            /* Get the email input value */
           var email = document.getElementById('email-input').value;

            /* Display thank you message */
            alert('Subscribed! Thank you for joining our newsletter.');

            /* Reset the form */
            document.getElementById('email-input').value = '';
        }

