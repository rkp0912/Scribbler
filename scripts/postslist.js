// Get the container
var modal = document.getElementById("container");

// Get the signup button that opens the container
var btnSignUp = document.getElementById("signUp");

// Get the signin button that opens the container
var btnSignIn = document.getElementById("signIn");

// Get the Id element that closes the modal
var signUpSpan = document.getElementsByClassName("close")[0];
var signInSpan = document.getElementsByClassName("close")[1];


var delPost1 = document.getElementsByClassName("posts");

var confirmDelete = document.getElementById("confirmDelete");
var cancelDelete = document.getElementById("cancelDelete");


console.log(delPost1);

var ele = null;


var signUpLink = document.getElementById("ref");


$('.posts').on("click",".delPost", function(e){ //user click on remove text links
    ele = this;
    modal.style.display = "block";
    var deleteConfirm = document.getElementById("deleteConfirmation");
    deleteConfirm.style.display = "block"; 
    var signupcontent = document.getElementById("signUpContainer");
    signupcontent.style.display = "none";
    signUpSpan.style.display = "none";
    var signincontent = document.getElementById("signInContainer");
    signincontent.style.display = "none";
    signInSpan.style.display = "none";
})

$('.posts').on("click",".more", function(e){ //user click on remove text links
    window.open("../html/post.html");
})


// When the user clicks the signup, open the modal 
btnSignUp.onclick = function() {
  modal.style.display = "block";
  var signupcontent = document.getElementById("signUpContainer");
  signupcontent.style.display = "block";
  signUpSpan.style.display = "block";
  var signincontent = document.getElementById("signInContainer");
  signincontent.style.display = "none";
  signInSpan.style.display = "none";
}

// // When the user clicks the signin, open the modal 
btnSignIn.onclick = function() {
    modal.style.display = "block";
    var signupcontent = document.getElementById("signUpContainer");
    signupcontent.style.display = "none";
    signUpSpan.style.display = "none";
    var signincontent = document.getElementById("signInContainer");
    signincontent.style.display = "block";
    signInSpan.style.display = "block";
  }

  

// When the user clicks on <span> (x) on signup, close the modal
signUpSpan.onclick = function() {
    modal.style.display = "none";
    signUpSpan.style.display = "none";
    }

// When the user clicks on <span> (x) on signin, close the modal
signInSpan.onclick = function() {
    modal.style.display = "none";
    signInSpan.style.display = "none";
}

signUpLink.onclick =function(){
    modal.style.display = "block";
    var signupcontent = document.getElementById("signUpContainer");
    signupcontent.style.display = "block";
    signUpSpan.style.display = "block";
    var signincontent = document.getElementById("signInContainer");
    signincontent.style.display = "none";
    signInSpan.style.display = "none";
}


cancelDelete.onclick = function(){
    modal.style.display = "none";
    var deleteConfirm = document.getElementById("deleteConfirmation");
    deleteConfirm.style.display = "none"; 
}


confirmDelete.onclick = function(){
    modal.style.display = "none";
    var deleteConfirm = document.getElementById("deleteConfirmation");
    deleteConfirm.style.display = "none";
    ele.parentElement.parentElement.parentElement.parentElement.remove();  
}