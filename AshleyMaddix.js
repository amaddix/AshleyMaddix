
let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(document.getElementById("fname").value);
  console.log(document.getElementById("lname").value);

  console.log(document.getElementById("email").value);
  console.log(document.getElementById("phone").value);
}
  
