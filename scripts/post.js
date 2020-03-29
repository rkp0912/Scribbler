// Get the container
var modal = document.getElementById("container");

// Get the signup button that opens the container
var btnSignUp = document.getElementById("signUp");

// Get the signin button that opens the container
var btnSignIn = document.getElementById("signIn");

// Get the Id element that closes the modal
var signUpSpan = document.getElementsByClassName("close")[0];
var signInSpan = document.getElementsByClassName("close")[1];


// var delPost1 = document.getElementsByClassName("posts");

// var confirmDelete = document.getElementById("confirmDelete");
// var cancelDelete = document.getElementById("cancelDelete");

var editCurrentPost = document.getElementById("editButton");
var saveCurrentPost = document.getElementById("saveButton");
var likeCurrentPost = document.getElementById("likeButton");
var commentOnCurrentPost = document.getElementById("commentButton");

var ele = null;

var likeCounter = 0;


var signUpLink = document.getElementById("ref");

var title = document.getElementById("postTitle")
var author = document.getElementById("authorName");
var postContent = document.getElementById("postContent");

var likeStatus = document.getElementById("likeText");
var commentData = document.getElementById("editComment");

var commentsList = document.getElementById("existingComments");

// $('.posts').on("click",".delPost", function(e){ //user click on remove text links
//     ele = this;
//     modal.style.display = "block";
//     var deleteConfirm = document.getElementById("deleteConfirmation");
//     deleteConfirm.style.display = "block"; 
//     var signupcontent = document.getElementById("signUpContainer");
//     signupcontent.style.display = "none";
//     signUpSpan.style.display = "none";
//     var signincontent = document.getElementById("signInContainer");
//     signincontent.style.display = "none";
//     signInSpan.style.display = "none";
// })

// $('.posts').on("click",".more", function(e){ //user click on remove text links
//     window.open("../html/post.html");
// })


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


// cancelDelete.onclick = function(){
//     modal.style.display = "none";
//     var deleteConfirm = document.getElementById("deleteConfirmation");
//     deleteConfirm.style.display = "none"; 
// }


// confirmDelete.onclick = function(){
//     modal.style.display = "none";
//     var deleteConfirm = document.getElementById("deleteConfirmation");
//     deleteConfirm.style.display = "none";
//     ele.parentElement.parentElement.parentElement.parentElement.remove();  
// }

window.onload = function() {
    console.log(localStorage.getItem("Author"));



    title.value = localStorage.getItem("Title");
    author.innerText = localStorage.getItem("Author");
    postContent.value = localStorage.getItem("Content");

}

editCurrentPost.onclick = function(){
    title.style.pointerEvents = "auto";
    title.style.border="solid";
    title.style.borderColor="pink";
    postContent.style.pointerEvents = "auto";
    postContent.style.border="solid";
    postContent.style.borderColor="pink";
    editCurrentPost.style.display="none";
    saveCurrentPost.style.display="block";
}


saveCurrentPost.onclick = function(){
    title.style.pointerEvents = "none";
    title.style.border="none";
    // title.style.borderColor="pink";
    postContent.style.pointerEvents = "none";
    postContent.style.border="none";
    // postContent.style.borderColor="pink";
    editCurrentPost.style.display="block";
    saveCurrentPost.style.display="none";
}

likeCurrentPost.onclick = function(){
    likeCounter++;
    if(likeCounter == 1){
        likeStatus.innerText = "1 person likes this!";
        likeCurrentPost.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
    }

    if(likeCounter > 1){
        likeStatus.innerText = likeCounter + " people like this!";
    }

}

commentOnCurrentPost.onclick = function(){

    if(commentData.value != ""){
        var para = document.createElement("p");
        var node = document.createTextNode(commentData.value);
        para.appendChild(node);
        commentData.value = "";
        para.classList.add("comment-style");
        // commentsList.appendChild(para);
        commentsList.insertBefore(para, document.getElementsByClassName("comment-style")[0]);
    }
}