// Get the modal
var modal = document.getElementById('id00');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) { modal.style.display = "none"; }
}

const form = document.getElementById('formR');
const username = document.getElementById('usernameR');
const email = document.getElementById('emailR');
const password = document.getElementById('passwordR');
const cpassword = document.getElementById('cpasswordR');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	//get the values from the inputs
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const cpasswordValue = cpassword.value.trim();

	if (usernameValue === '') {
		// show error
		//add error class
		setErrorFor(username, 'Username cannot be blank');
	}
	else {
		//add success class
		setSuccessFor(username);
	}

	if (emailValue === '') {
		setErrorFor(email, 'Email ID cannot be blank');
	}
	else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email ID is not valid');
	}
	else {
		setSuccessFor(email);
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
		showPassword.style.right = "30px";
	}
	else {
		setSuccessFor(password);
		showPassword.style.right = "30px";
	}

	if (cpasswordValue === '') {
		setErrorFor(cpassword, 'Password cannot be blank');
		cshowPassword.style.right = "30px";
	}
	else if (passwordValue !== cpasswordValue) {
		setErrorFor(cpassword, 'Password does not match');
		cshowPassword.style.right = "30px";
	}
	else {
		setSuccessFor(cpassword);
		cshowPassword.style.right = "30px";
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement; //.form-control
	const small = formControl.querySelector('small');

	//add error message inside small
	small.innerText = message;

	//add error class 
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement; //.form-control
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const showPassword = document.querySelector('#show-passwordR');
const passwordField = document.querySelector('#passwordR');

showPassword.addEventListener("click", function () {
	this.classList.toggle("fa-eye-slash");
	const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
	passwordField.setAttribute("type", type);
})

const cshowPassword = document.querySelector('#cshow-passwordR');
const cpasswordField = document.querySelector('#cpasswordR');

cshowPassword.addEventListener("click", function () {
	this.classList.toggle("fa-eye-slash");
	const type = cpasswordField.getAttribute("type") === "password" ? "text" : "password";
	cpasswordField.setAttribute("type", type);
})

const submit_button = document.querySelector('#register');
submit_button.onclick = (e) => {
	e.preventDefault();
	checkInputs();
	//All input data recieved this variables
	const usernameS = document.getElementById('usernameR').value;
	const emailS = document.getElementById('emailR').value;
	const passwordS = document.getElementById('passwordR').value;
	const cpasswordS = document.getElementById('cpasswordR').value;

	if (VaildForm()) {
		//now store this data in your web browser store
		localStorage.setItem('usernameR', usernameS);
		localStorage.setItem('emailR', emailS);
		localStorage.setItem('passwordR', passwordS);
		localStorage.setItem('cpasswordR', cpasswordS);
	}

	function VaildForm() {
		if (usernameS == '') {
			swal("Oops..!", "Username cannot be blank!", "error");
		}
		else if (emailS == '') {
			swal("Oops..!", "Email ID cannot be blank!", "error");
		} else if (!isEmail(emailS)) {
			swal("Oops..!", "Please enter valid Email ID!", "error");
		} else if (passwordS == '') {
			swal("Oops..!", "Password cannot be blank!", "error");
		} else if (cpasswordS == '') {
			swal("Oops.!", "Please confirm your password!", "error");
		} else if (cpasswordS !== passwordS) {
			swal("Oops..!", "Password does not match!", "error");
		} else {
			swal("Good Job!", "Registration Successful.", "success");
			return true;
		}
	}

	const close = document.getElementById('id00');
	const resetForm = document.getElementById('formR');
	setTimeout(CloseModal, 2000);

	//After successful registration close the registration form display.
	function CloseModal() {
		if (VaildForm() !== false) {
			close.style.display = 'none';
			resetForm.reset();
		}
	}
}