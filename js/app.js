

document.getElementById("show").addEventListener("wheel", myFunction1);
document.getElementById("test").addEventListener("wheel", myFunction2);

var html = document.getElementsByTagName("html")[0];

function myFunction1() {
    var topScreen = html.scrollTop;   
        var elShow = document.getElementById("show").offsetTop;
        if(topScreen > elShow - 400){
            document.getElementById("show").style.opacity = 1;
        };

}

function myFunction2() {
    var topScreen = html.scrollTop;  
        var elShow = document.getElementById("test").offsetTop;
        if(topScreen > elShow - 400){
            document.getElementById("test").style.background = "#FFFF";
        };

}

jQuery(document).ready(function($){
 
    // Define a blank array for the effect positions. This will be populated based on width of the title.
    var bArray = [];
    // Define a size array, this will be used to vary bubble sizes
    var sArray = [4,6,8,10];
 
    // Push the header width values to bArray
    for (var i = 0; i < $('.animacion').width(); i++) {
        bArray.push(i);
    }
     
    // Function to select random array element
    // Used within the setInterval a few times
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    } 
    // setInterval function used to create new bubble every 350 milliseconds
    setInterval(function(){
         
        // Get a random size, defined as variable so it can be used for both width and height
        var size = randomValue(sArray);
        // New bubble appeneded to div with it's size and left position being set inline
        // Left value is set through getting a random value from bArray
        $('.animacion').append('<div class="individual-animacion" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
         
        // Animate each bubble to the top (bottom 100%) and reduce opacity as it moves
        // Callback function used to remove finsihed animations from the page
        $('.individual-animacion').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        ); 
    }, 350); 
});

var text = $(".hotels-title");
var split = new SplitText(text);
function random(min, max){
	return (Math.random() * (max - min)) + min;
}

$(split.chars).each(function(i){
	TweenMax.from($(this), 2.5, {
		opacity: 0,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		scale: .1,
		delay: i * .02,
		yoyo: true,
		repeat: -1,
		repeatDelay: 3
	});
});

