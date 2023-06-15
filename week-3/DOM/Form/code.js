const form = document.getElementById("form");
const nameInput = document.getElementById("name-input");
const salaryInput = document.getElementById("salary-input");
const birthdayInput = document.getElementById("birthday-input");
const phoneInput = document.getElementById("phone-input");
const button = document.getElementById("button");
const errField = document.getElementById("form-error");

const validate = function (event) {
  event.preventDefault()
  switch (true) {
    case (nameInput.value === ""):
      errField.innerHTML = "name is missing";
      break;
    case (salaryInput.value === ""): 
      errField.innerHTML = "salary is missing";
      break;
    case (birthdayInput.value === ""): 
      errField.innerHTML = "birthday is missing";
      break;
    case (phoneInput.value === ""):
      errField.innerHTML = "phone is missing";
      break;
    case (nameInput.value.length < 2):
      errField.innerHTML = "Name must be longer than 2 characters";
      break;
    case (parseInt(salaryInput.value) < 10000 || parseInt(salaryInput.value) > 16000):
      errField.innerHTML = "Salary must be greater than 10,000 but less than 16,000";
      break;
    case (birthdayInput.value == "0"):
      errField.innerHTML = "Birthday may not be null";
      break;
    case (phoneInput.value.length != 10):
      errField.innerHTML = "Phone must be 10 digits long";
      break;
    default:
      form.style.display = "none"
      let header = document.createElement("h1")
      header.innerHTML = "Welcome";
      document.body.appendChild(header)
  }

    

// Phone must be 10 digits long

};

