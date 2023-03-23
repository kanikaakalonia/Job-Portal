// Get the modal
var modal = document.getElementById('id00');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event)
{
    	if (event.target == modal){modal.style.display = "none";}
}

function myshowpsw ()
{
 	var x = document.getElementById("myshow");
	if (x.type === "password"){x.type = "text";} 
	else {x.type = "password";}
}

var input = document.getElementById("myInput");
var text = document.getElementById("text");

input.addEventListener("keyup", function(event)
{
	if (event.getModifierState("CapsLock")){text.style.display = "block";}
	else {text.style.display = "none"}
});