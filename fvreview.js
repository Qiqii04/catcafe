

document.getElementById("review-form").addEventListener("submit", reviewFormValidate);

  // Function to handle review form validation
  function reviewFormValidate(event) {
    event.preventDefault();
  
    let name = document.getElementById("rname");
    let email = document.getElementById("remail");
    let rating = document.getElementById("rating");
    let textarea = document.getElementById("rtextarea");
    let imageUpload = document.getElementById("image-upload");

    //check empty name
  if (name.value == "") {
    //retrieve the id from html
    let small = document.getElementById("r1");
    //change the caption of error message
    small.innerText = "Name required";
    //change visibility to visible
    document.getElementById("r1").style.visibility = "visible";
  } else {
    document.getElementById("r1").style.visibility = "hidden";
  }

  //check empty email
  if (email.value == "") {
    //retrieve the id from html
    let small = document.getElementById("r2");
    //change the caption of error message
    small.innerText = "Email required";
    //change visibility to visible
    document.getElementById("r2").style.visibility = "visible";
  } else {
    document.getElementById("r2").style.visibility = "hidden";
  }

  //check empty rating
  if (rating.value == "") {
    //change the caption of error message
    small.innerText = "Review required";
    //change visibility to visible
    document.getElementById("r3").style.visibility = "visible";
    
  }else {
    document.getElementById("r3").style.visibility = "hidden";
    
  }

  //check empty password
  if (textarea.value == "") {
    //retrieve the id from html
    let small = document.getElementById("r4");
    //change the caption of error message
    small.innerText = "Review required";
    //change visibility to visible
    document.getElementById("r4").style.visibility = "visible";
    return false;
  }else {
    document.getElementById("r4").style.visibility = "hidden";
    
  }

 // Display the success message when the form is valid
 alert("Form Submitted!");
  // Clear the input fields
  name.value = "";
  email.value = "";
  textarea.value = "";
 
}