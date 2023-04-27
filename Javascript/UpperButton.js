var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("upper").style.bottom = "8px";
	}
	else {
		document.getElementById("upper").style.bottom = "-100px";
	}
	prevScrollpos = currentScrollPos;
}