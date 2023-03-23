// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
    	if (event.target == modal){modal.style.display = "none";}
}

function myshowpsw1 ()
{
	var x = document.getElementById("myshow1");
	if (x.type === "password"){x.type = "text";} 
	else {x.type = "password";}
}

function myshowpsw2 ()
{
 	var x = document.getElementById("myshow2");
	if (x.type === "password"){x.type = "text";} 
	else {x.type = "password";}
}

function myshowkey ()
{
 	var x = document.getElementById("mykey");
	if (x.type === "password"){x.type = "text";} 
	else {x.type = "password";}
}

var input1 = document.getElementById("myInput1");
var text1 = document.getElementById ("text1");

input1.addEventListener("keyup", function(event)
{
	if (event.getModifierState("CapsLock")){text1.style.display = "block";}
	else {text1.style.display = "none"}
});

var input2 = document.getElementById("myInput2");
var text2 = document.getElementById ("text2");

input2.addEventListener("keyup", function(event)
{
	if (event.getModifierState("CapsLock")){text2.style.display = "block";}
	else {text2.style.display = "none"}
});

function mylb1()
{
  	document.getElementById("lb1").style.borderBottom = "1px solid blue";
	document.getElementById("lb1").style.color = "blue";
	document.getElementById("lb2").style.color = "black";
	document.getElementById("lb2").style.borderBottom = "none";
}

function mylb2()
{
	document.getElementById("lb2").style.borderBottom = "1px solid blue";
	document.getElementById("lb2").style.color = "blue";
	document.getElementById("lb1").style.borderBottom = "none";
	document.getElementById("lb1").style.color = "black";
}