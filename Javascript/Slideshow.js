var timeOut1 = 100;
var slideIndex1 = 0;
var autoOn1 = true;

autoSlides1();
function autoSlides1() {
	timeOut1 = timeOut1 - 20;
	if (autoOn1 == true && timeOut1 < 0) { showSlides1(); }
	setTimeout(autoSlides1, 20);
}

function prevSlide1() {
	timeOut1 = 2000;
	var slides1 = document.getElementsByClassName("mySlides1");
	dots1 = document.getElementsByClassName("dot1");

	for (i = 0; i < slides1.length; i++) {
		slides1[i].style.display = "none";
		dots1[i].className = dots1[i].className.replace(" active", "");
	}
	slideIndex1--;

	if (slideIndex1 > slides1.length) { slideIndex1 = 1 }
	if (slideIndex1 == 0) { slideIndex1 = 3 }

	slides1[slideIndex1 - 1].style.display = "block";
	dots1[slideIndex1 - 1].className += " active";
}

function showSlides1() {
	timeOut1 = 2000;
	var slides1 = document.getElementsByClassName("mySlides1");
	var dots1 = document.getElementsByClassName("dot1");

	for (i = 0; i < slides1.length; i++) {
		slides1[i].style.display = "none";
		dots1[i].className = dots1[i].className.replace(" active", "");
	}
	slideIndex1++;

	if (slideIndex1 > slides1.length) { slideIndex1 = 1 }
	slides1[slideIndex1 - 1].style.display = "block";
	dots1[slideIndex1 - 1].className += " active";
}

var timeOut2 = 100;
var slideIndex2 = 0;
var autoOn2 = true;

autoSlides2();
function autoSlides2() {
	timeOut2 = timeOut2 - 20;
	if (autoOn2 == true && timeOut2 < 0) { showSlides2(); }
	setTimeout(autoSlides2, 20);
}

function prevSlide2() {
	timeOut2 = 2000;
	var slides2 = document.getElementsByClassName("mySlides2");
	dots2 = document.getElementsByClassName("dot2");

	for (i = 0; i < slides2.length; i++) {
		slides2[i].style.display = "none";
		dots2[i].className = dots2[i].className.replace(" active", "");
	}
	slideIndex2--;

	if (slideIndex2 > slides2.length) { slideIndex2 = 1 }
	if (slideIndex2 == 0) { slideIndex2 = 3 }

	slides2[slideIndex2 - 1].style.display = "block";
	dots2[slideIndex2 - 1].className += " active";
}

function showSlides2() {
	timeOut2 = 2000;
	var slides2 = document.getElementsByClassName("mySlides2");
	var dots2 = document.getElementsByClassName("dot2");

	for (i = 0; i < slides2.length; i++) {
		slides2[i].style.display = "none";
		dots2[i].className = dots2[i].className.replace(" active", "");
	}
	slideIndex2++;

	if (slideIndex2 > slides2.length) { slideIndex2 = 1 }
	slides2[slideIndex2 - 1].style.display = "block";
	dots2[slideIndex2 - 1].className += " active";
}

var timeOut3 = 100;
var slideIndex3 = 0;
var autoOn3 = true;

autoSlides3();
function autoSlides3() {
	timeOut3 = timeOut3 - 20;
	if (autoOn3 == true && timeOut3 < 0) { showSlides3(); }
	setTimeout(autoSlides3, 20);
}

function prevSlide3() {
	timeOut3 = 2000;
	var slides3 = document.getElementsByClassName("mySlides3");
	dots3 = document.getElementsByClassName("dot3");

	for (i = 0; i < slides3.length; i++) {
		slides3[i].style.display = "none";
		dots3[i].className = dots3[i].className.replace(" active", "");
	}
	slideIndex3--;

	if (slideIndex3 > slides3.length) { slideIndex3 = 1 }
	if (slideIndex3 == 0) { slideIndex3 = 3 }

	slides3[slideIndex3 - 1].style.display = "block";
	dots3[slideIndex3 - 1].className += " active";
}

function showSlides3() {
	timeOut3 = 2000;
	var slides3 = document.getElementsByClassName("mySlides3");
	var dots3 = document.getElementsByClassName("dot3");

	for (i = 0; i < slides3.length; i++) {
		slides3[i].style.display = "none";
		dots3[i].className = dots3[i].className.replace(" active", "");
	}
	slideIndex3++;

	if (slideIndex3 > slides3.length) { slideIndex3 = 1 }
	slides3[slideIndex3 - 1].style.display = "block";
	dots3[slideIndex3 - 1].className += " active";
}