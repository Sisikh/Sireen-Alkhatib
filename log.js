function subscribe() {
  var firstName = document.getElementById("firstName").value;
  var middleName = document.getElementById("middleName").value;
  var lastName = document.getElementById("lastName").value;
  var fullName = firstName + " " + (middleName ? middleName + " " : "") + lastName;
  var welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = fullName + ", welcome to our hotel! You can take a look at our rooms and prices.";
  welcomeMessage.style.marginTop = "10px";
  var button = document.querySelector("button");
  button.parentNode.insertBefore(welcomeMessage, button.nextSibling);
}
