var _ratings_ = [];
var _myRating_ = null;

$(document).ready(function() {
 
    $("nav a").click(function(event) {
 		
 		event.preventDefault();

 		$("nav ul > li").each(function() {
 			$(this).removeClass("selected");
 		});

 		$(this).parent("li").addClass("selected");

        $("main").load($(this).attr("href") + " article");
 
    });

    $("nav li").click(function(event) {

 		$("nav ul > li").each(function() {
 			$(this).removeClass("selected");
 		});

 		$(this).addClass("selected");

        $("main").load($(this).find("a").attr("href") + " article");
 
    });
    
    init();
 
});

function init() {
	$("nav ul > li").first().trigger("click");

_myRating_ = addRatingWidget();
updateRating();
}

function addRatingWidget(){
    var nrOfRatings = _ratings_.length;
    
    if(_ratings_ != null && _ratings_.length > 0){
        var sum = _ratings_.reduce(function(pv, cv){
            return pv + cv; }, 0);
        _myRating_.setRating(Math.round((sum / nrOfRatings), false);
        $("#var-star").text(Math.round(sum / nrOfRatings)* 10) / 10);
        $("#var-person").text(nrOfRatings);
    }else {
        $("var-star").text(0);
        $("var-person").text(0);
    }
}

function addRatingWidget(){
    var ratingElement = document.querySelector('#rating-input');
    var currentRating = 0;
    var maxRating = 5;
    var callback = function(rating) {
        addRating(rating);
    };
    var r = rating(ratingElement, currentRating, maxRating, callback);
    return r;
}

function updatePrtion(val){
    document.querySelector(#"portion").innerHTML = val;
                           var x = document.querySelectorAll("span[data-unit]");
    var i;
    for(i = 0; i < x.length; i++){
        x[i].innerHTML = x[i].getAttribute("data-unit") * val;
    }
    
}