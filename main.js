// Just fancy stuff!! 
//Added only for accepting the color input and changing body background

// Reloading function for reset button
function refreshPage(){
	window.location.reload();
} 

$(document).ready(function() {

	// Color changing background
	const body = document.querySelector("body");
	const input = document.getElementById("colorPicker");

	setColor();
	input.addEventListener("input", setColor);

	function setColor() {
		body.style.backgroundColor = input.value;
	}


	// Color changing font
	const text = document.querySelectorAll(".text");
	const fontInput = document.getElementById("colorPickerFont");

	setFontColor();
	fontInput.addEventListener("input", setFontColor);

	function setFontColor() {
		// for (i = 0, len = text.length; i < length; i++) {
		// 	text[i].style.color = input.value;
		// }

		text.forEach(textItem => {
			textItem.style.color = fontInput.value;
		});
	}


	// Font size changer
	function getSize() {
	  	size = $( ".text" ).css( "font-size" );
	  	size = parseInt(size) - 5;
	  	$( "#font-size" ).text(  size  );
	}

	//get inital font size
	getSize();

	$( "#up" ).on( "click", function() {
  	// parse font size, if less than 50 increase font size
  	if ((size + 2) <= 50) {
    	$( ".text" ).css( "font-size", "+=2" );
    	$( "#font-size" ).text(  size += 2 );
  	}
	});

	$( "#down" ).on( "click", function() {
  		if ((size - 2) >= 12) {
    		$( ".text" ).css( "font-size", "-=2" );
    		$( "#font-size" ).text(  size -= 2  );
  		}
	});
});
