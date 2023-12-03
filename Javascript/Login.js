// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) { modal.style.display = "none"; }
}

function mylb1() {
	document.getElementById("lb1").style.textDecoration = "underline";
	document.getElementById("lb2").style.textDecoration = "none";
}

function mylb2() {
	document.getElementById("lb2").style.textDecoration = "underline";
	document.getElementById("lb1").style.textDecoration = "none";
}

//const formL = document.getElementById('formL');
const emailL = document.getElementById('emailLu');
const passwordL = document.getElementById('passwordLu');
const cpasswordL = localStorage.getItem("Password");

// formL.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	checkInputsL();
// });

function checkInputsL() {
	//get the values from the inputs
	const emailValueL = emailL.value.trim();
	const passwordValueL = passwordL.value.trim();
	//const cpasswordValueL = cpasswordL.value.trim();

	if (emailValueL === '') {
		setErrorForL(emailL, 'Email ID cannot be blank');
	}
	else if (!isEmailL(emailValueL)) {
		setErrorForL(emailL, 'Email ID is not valid');
	}
	else {
		setSuccessForL(emailL);
	}

	if (passwordValueL === '') {
		setErrorForL(passwordL, 'Password cannot be blank');
		showPasswordL.style.right = "30px";
	}
	else if (passwordValueL !== cpasswordL) {
		setErrorForL(passwordL, 'Password cannot be blank');
		showPasswordL.style.right = "30px";
	}
	else {
		setSuccessForL(passwordL);
		showPasswordL.style.right = "30px";
	}
}

function setErrorForL(input, message) {
	const formControl = input.parentElement; //.form-control
	const small = formControl.querySelector('small');

	//add error message inside small
	small.innerText = message;

	//add error class 
	formControl.className = 'form-control error';
}

function setSuccessForL(input) {
	const formControl = input.parentElement; //.form-control
	formControl.className = 'form-control success';
}

function isEmailL(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const showPasswordL = document.querySelector('#show-passwordLu');
const passwordFieldL = document.querySelector('#passwordLu');

showPasswordL.addEventListener("click", function () {
	this.classList.toggle("fa-eye-slash");
	const type = passwordFieldL.getAttribute("type") === "password" ? "text" : "password";
	passwordFieldL.setAttribute("type", type);
})

const ULogin = document.querySelector('#ULogin');
ULogin.onclick = (e) => {
	e.preventDefault();
	checkInputsL();
	const emailL = document.getElementById('emailLu').value;
	const passwordL = document.getElementById('passwordLu').value;

	const Email = JSON.parse(localStorage.getItem("Email"));
	const Password = JSON.parse(localStorage.getItem("Password"));

	if (emailL == "") {
		swal("Oops..!", "Please enter your Email ID...!", "error");
	}
	else if (passwordL == "") {
		swal("Oops..!", "Please enter your password...!", "error");
	}
	else {
		if (emailL == Email && passwordL == Password) {
			//Prevent from direct access to Home_Site.
			localStorage.setItem("Code", "Dont You Dare!");
			//After login successfully, Go to Home_Site.
			window.location.replace("Home_Site.html");
		}
		else {
			swal("Oops..!", "Password does not match...!", "error");
		}
	}
}

const ALogin = document.querySelector('#ALogin');
ALogin.onclick = (e) => {
	e.preventDefault();

	const emailLa = document.getElementById('emailLa').value;
	const passwordLa = document.getElementById('passwordLa').value;
	const Security = document.getElementById('SecurityKey').value;

	if (emailLa == "") {
		swal("Oops..!", "Please enter your Email ID...!", "error");
	}
	else if (passwordLa == "") {
		swal("Oops..!", "Please enter your password...!", "error");
	}
	else if (Security == "") {
		swal("Oops..!", "Please enter your Security Key..!", "error");
	}
	else {
		if (emailLa === "admin123@gmail.com" && passwordLa === "Admin123@#" && Security === "1029384756") {
			//Prevent from direct access to Home_Site.
			localStorage.setItem("Security", "Dont You Dare!");
			//After login successfully, Go to Home_Site.
			window.location.replace("AdminControl.html");
		}
		else {
			swal("Oops..!", "Something is Wrong..!", "error");
		}
	}
}

const showPasswordLa = document.querySelector('#show-passwordLa');
const passwordFieldLa = document.querySelector('#passwordLa');
const SecurityField = document.querySelector('#SecurityKey');
const showSecurity = document.querySelector('#show-key');

showPasswordLa.addEventListener("click", function () {
	this.classList.toggle("fa-eye-slash");
	const type = passwordFieldLa.getAttribute("type") === "password" ? "text" : "password";
	passwordFieldLa.setAttribute("type", type);
})

showSecurity.addEventListener("click", function () {
	this.classList.toggle("fa-eye-slash");
	const type = SecurityField.getAttribute("type") === "password" ? "text" : "password";
	SecurityField.setAttribute("type", type);
})