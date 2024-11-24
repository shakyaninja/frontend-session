document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // document.getElementById("submittedUsername").textContent = username;
  // document.getElementById("submittedPassword").textContent = "*".repeat(
  //   password.length
  // );

  alert(
    `Submitted data are username username:${username}, passwor:${password}`
  );

  document.getElementById("popover").style.display = "block";
});

// function closePopover() {
//   document.getElementById("popover").style.display = "none";
// }
