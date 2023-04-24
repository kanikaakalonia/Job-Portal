// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) { modal.style.display = "none"; }
}

// function mylb1() {
// 	document.getElementById("lb1").style.borderBottom = "1px solid blue";
// 	document.getElementById("lb1").style.color = "blue";
// 	document.getElementById("lb2").style.color = "black";
// 	document.getElementById("lb2").style.borderBottom = "none";
// }

// function mylb2() {
// 	document.getElementById("lb2").style.borderBottom = "1px solid blue";
// 	document.getElementById("lb2").style.color = "blue";
// 	document.getElementById("lb1").style.borderBottom = "none";
// 	document.getElementById("lb1").style.color = "black";
// }

const formL = document.getElementById('formL');
const emailL = document.getElementById('emailL');
const passwordL = document.getElementById('passwordL');

formL.addEventListener('submit', (e) => {
	e.preventDefault();
	checkInputsL();
});

function checkInputsL() {
	//get the values from the inputs
	const emailValueL = emailL.value.trim();
	const passwordValueL = passwordL.value.trim();

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

function isEmailL(emailL) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const showPasswordL = document.querySelector('#show-passwordL');
const passwordFieldL = document.querySelector('#passwordL');

showPasswordL.addEventListener("click", function () {
	this.classList.toggle("fa-eye-slash");
	const type = passwordFieldL.getAttribute("type") === "password" ? "text" : "password";
	passwordFieldL.setAttribute("type", type);
})
