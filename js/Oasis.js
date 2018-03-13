
function a(){

var slideIndex = 1;			//Setting both counters to 1
showDivs(slideIndex);

var yearIndex = 1;
showYear(yearIndex);

}

function plusDivs(n) {			//When one of the buttons are pressed
    showDivs(slideIndex += n);	//Either add or subtract n from counters and launch the functions to show slide and year
    showYear(yearIndex += n)

    
}

function showDivs(n) {
    var i;
    console.log(n);
    var x = document.getElementsByClassName("page"); //Get the pages

    
    if (n > x.length) {slideIndex = 1}   //if n is more than the amont of pages we know it has reached the end so set it back to 1
    if (n < 1) {slideIndex = x.length}; //if it is 0 we know user has gone back from page 1 so set slideindex to last page.
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";		//Hide slides until it reaches the end
}
     x[slideIndex-1].style.display = "block"; //Show the user selected page
}

function showYear(n) {
    var i;
    var x = document.getElementById("timeline").getElementsByTagName("li");

    
    if (n > x.length) {yearIndex = 1}
    if (n < 1) {yearIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.fontSize = "small";
       
        x[i].style.color = "black";
}

    x[yearIndex-1].style.fontSize = "medium";
   
    x[yearIndex-1].style.color = "#ff3535";

}



$



(function () {                          //Scrolling navbar change colour
  $(document).scroll(function () {
    var $nav = $("#Nav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 630);
  });
});





function showDescription(foo){              //Showing the description of a selected album.
	var selection = foo;


	var text = document.getElementsByClassName('albumText');
	for (var i = 0 ; i < selection; i++) {

		
	}
	text[i-1].style.display = "block";

}

function hideDescription(foo){


var selection = foo;
	

	var text = document.getElementsByClassName('albumText');
	for (var i = 0 ; i < selection; i++) {
		text[i].style.display = "none";
		
	}
	
}


