// get form element by id
const loginForm = document.querySelector("#login");
// handle form submit event
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // collect form data
  const formData = new FormData(loginForm);
  // send data to backend
  // Display success message to user
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Login successful!";
});

// Wtite fullName function
function fullName(firstName, lastName) {
//   return (fullName = firstName + " " + lastName);
return `${firstName} ${lastName}`;
}
const myName = fullName("Abygurl", "Debrah");
console.log(myName);
