const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

form.addEventListener("keydown", () => {
  Success(fname);
  Success(lname);
  Success(email);
  Success(password);
});
function checkInputs() {
  if (fname.value === "") {
    error(fname, "First Name cannot be blank");
  } else {
    Success(fname);
  }

  if (lname.value === "") {
    error(lname, "Last Name cannot be blank");
  } else {
    Success(lname);
  }

  if (email.value === "") {
    error(email, "Email cannot be blank");
  } else if (!isEmail(email.value)) {
    error(email, "Looks like this is not an email");
  } else {
    Success(email);
  }

  if (password.value === "") {
    error(password, "Password cannot be blank");
  } else {
    Success(password);
  }
}

function error(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function Success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
}
