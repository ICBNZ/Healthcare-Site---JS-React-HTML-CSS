// Buttons - Show/Hide Modals
window.onclick = function(event) {
  var btn = document.querySelectorAll(".button1");
  var modal = document.querySelectorAll('#modal');
  var c = document.querySelectorAll('#close');
  var m = [modal[0], modal[1], modal[2]];
  var b = [btn[0], btn[1], btn[2]];

  function hideB(){
    for(var i=0; i < b.length; i++){
        b[i].style.visibility = "hidden";
    }
  }
  function showB(){
    for(var i=0; i < b.length; i++){
        b[i].style.visibility = "";
    }
  }
  if (event.target == btn[0] ) {
      m[0].style.display='block';
      hideB();
    }
  if (event.target == btn[1] ) {
      m[1].style.display='block';
      hideB();
    }
  if (event.target == btn[2] ) {
      m[2].style.display='block';
      hideB();
    }
  if (event.target == c[0] ) {
      m[0].style.display='none';
      showB();
    }
  if (event.target == c[1] ) {
      m[1].style.display='none';
      showB();
    }
  if (event.target == c[2] ) {
      m[2].style.display='none';
      showB();
    }
  if (event.target == m[0] ) {
      m[0].style.display='none';
      showB();
    }
  if (event.target == m[1] ) {
      m[1].style.display='none';
      showB();
    }
  if (event.target == m[2] ) {
      m[2].style.display='none';
      showB();
    }

}


// Login form
var loginform = document.getElementById("loginform");
// Focus
loginform.addEventListener("focus", function( event ) {
  event.target.style.background = "LightCyan";
}, true);

// Blur
loginform.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);

// Validate With Alerts
/*document.getElementById("loginform1").addEventListener("submit", validateForm);*/
function validateForm() {
    var un = document.getElementById('username').value;
    var psw = document.getElementById('password').value;
    if (un == "") {
        alert("Enter username");
        return false;
    }
    if (psw == "") {
        alert("Enter password");
        return false;
    }

}
// Validate New User Form
/*document.getElementById("newuser1").addEventListener("submit", checkForm);*/
function checkForm() {
  //First Name
    var firstname = document.getElementById('firstname').value;
    var firstname_msg = document.getElementById('firstname_msg');
    var valid = true;
    if (firstname.length == "") {
    firstname_msg.innerHTML = "\nEnter first name";
    firstname_msg.className = 'error';
    valid = false;
    } else {
    firstname_msg.innerHTML = "";
    firstname_msg.className = '';
    }
  //Last Name
    var lastname = document.getElementById('lastname').value;
    var lastname_msg = document.getElementById('lastname_msg');
    if (lastname.length == "") {
    lastname_msg.innerHTML = "\nEnter last name";
    lastname_msg.className = 'error';
    valid = false;
    } else {
    lastname_msg.innerHTML = "";
    lastname_msg.className = '';
    }
// Email address
    var email = document.getElementById('email').value;
    var email_msg = document.getElementById('email_msg');
    // regular expression for validatin
    var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;
    if (email != !emailRegExp.test(email)) {
    email_msg.innerHTML = "\nEnter email ";
    email_msg.className = 'error';
    valid = false;
    } else {
    email_msg.innerHTML = "";
    email_msg.className = '';
    }
// Location
    var region = document.getElementById('region').value;
    var region_msg = document.getElementById('region_msg');
    if (region == -1) {
      region_msg.innerHTML = "\nChoose a region";
      region_msg.className = 'error';   return false;  }
    else {
      region_msg.innerHTML = "";
      region_msg.className = '';
    }
  return true;
}

// Background Customize
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                 $('body').css('background-image', 'url(' + e.target.result + ')');
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
