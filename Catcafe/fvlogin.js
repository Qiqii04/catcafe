

document.getElementById("login-form").addEventListener("submit", loginFormValidate);
  // Function to handle login form validation
  function loginFormValidate(event) {
    event.preventDefault();
  
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    //check empty email
  if (email.value == "") {
    //retrieve the id from html
    let small = document.getElementById("l1");
    //change the caption of error message
    small.innerText = "Email required";
    //change visibility to visible
    document.getElementById("l1").style.visibility = "visible";
  } else {
    document.getElementById("l1").style.visibility = "hidden";
  }

  //check empty password
  if (password.value == "") {
    //retrieve the id from html
    let small = document.getElementById("l2");
    //change the caption of error message
    small.innerText = "Password required";
    //change visibility to visible
    document.getElementById("l2").style.visibility = "visible";
  }
  //check for password length
  else if (password.value.length < 8) {
    let small = document.getElementById("l2");
    small.innerText = "Password must be at least 8 characters long";
    document.getElementById("l2").style.visibility = "visible";
    
  } else {
    document.getElementById("l2").style.visibility = "hidden";

    // Display the success message when the form is valid
    alert("Successful Login!");
    // Clear the input fields
    email.value = "";
    password.value = "";
    
  }
  
  }