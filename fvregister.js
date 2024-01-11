// Attach event listeners to the specific forms
document
  .getElementById("register-form")
  .addEventListener("submit", registerFormValidate);

// Function to handle registration form validation
function registerFormValidate(event) {
  event.preventDefault();

  let name = document.getElementById("name");
  let pnumber = document.getElementById("pnumber");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let dob = document.getElementById("dob");
  let gender = document.querySelector('input[name="gender"]:checked');

  if (name.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s1");
    //change the caption of error message
    small.innerText = "Name required";
    //change visibility to visible
    document.getElementById("s1").style.visibility = "visible";
  } else {
    document.getElementById("s1").style.visibility = "hidden";
  }

  //check empty last name
  if (pnumber.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s2");
    //change the caption of error message
    small.innerText = "Phone Number required";
    //change visibility to visible
    document.getElementById("s2").style.visibility = "visible";
  } 
  else if (pnumber.value.length < 10 || pnumber.value.length > 10 ) {
    let small = document.getElementById("s2");
    small.innerText = "Phone number must be 10 characters long";
    document.getElementById("s2").style.visibility = "visible";
  } else {
    document.getElementById("s2").style.visibility = "hidden";
  }

  //check empty email
  if (email.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s3");
    //change the caption of error message
    small.innerText = "Email required";
    //change visibility to visible
    document.getElementById("s3").style.visibility = "visible";
  } else {
    document.getElementById("s3").style.visibility = "hidden";
  }

  //check empty password
  if (password.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s4");
    //change the caption of error message
    small.innerText = "Password required";
    //change visibility to visible
    document.getElementById("s4").style.visibility = "visible";
  }
  //check for password length
  else if (password.value.length < 8) {
    let small = document.getElementById("s4");
    small.innerText = "Password must be at least 8 characters long";
    document.getElementById("s4").style.visibility = "visible";
  } else {
    document.getElementById("s4").style.visibility = "hidden";
  }

  //check empty dob
  if (dob.value == "") {
    //retrieve the id from html
    let small = document.getElementById("s5");
    //change the caption of error message
    small.innerText = "Date of Birth required";
    //change visibility to visible
    document.getElementById("s5").style.visibility = "visible";

  } else {
    document.getElementById("s5").style.visibility = "hidden";
  }

  if (!gender || gender.value === "") {
    //retrieve the id from html
    let small = document.getElementById("s6");
    //change the caption of error message
    small.innerText = "Gender selection required";
    //change visibility to visible
    document.getElementById("s6").style.visibility = "visible";
    return false;
    
  } else {
    document.getElementById("s6").style.visibility = "hidden";
  }

  
  // Display the success message when the form is valid
  alert("Successful Registration!");
  // Clear the input fields
  name.value = "";
  pnumber.value = "";
  email.value = "";
  password.value = "";
  dob.value = "";
  gender.value == "";
  
  
}
