var _myRating_ = {};

var api_key = "46a833761e132cb1";
var recipe = "fragilit%C3%A9";

$(document).ready(function() {

    $("nav a").click(function(event) {

 		event.preventDefault();

 		$("nav ul > li").each(function() {
 			$(this).removeClass("selected");
 		});

 		$(this).parent("li").addClass("selected");
      $("#content").load($(this).attr("href") + " article");
    });

    $("nav li").click(function(event) {

 		$("nav ul > li").each(function() {
 			$(this).removeClass("selected");
 		});

 		$(this).addClass("selected");
      $("#content").load($(this).find("a").attr("href") + " article");
    });
   
    init();

});

function init() {
	$("nav ul > li").first().trigger("click");

  _myRating_ = addRatingWidget();
  updateRating();
}

function updateRating() {
  
  $.get("https://edu.oscarb.se/sjk15/api/recipe/?api_key="+api_key+"&recipe="+recipe, function(data) {

    $("#var-star").text((data.rating * 10) / 10);
    $("#var-person").text(data.votes);

  });

}

function addRating(rating) {

  $.get("https://edu.oscarb.se/sjk15/api/recipe/?api_key="+api_key+"&recipe="+recipe+"&rating="+rating, function(data) {

    if (data.status === "ok") {
      updateRating();
    }

  });

}

function addRatingWidget() {
  var ratingElement = document.querySelector('#rating-input');
  var currentRating = 0;
  var maxRating = 5;
  var callback = function(rating) {
    addRating(rating);
  };
  var r = rating(ratingElement, currentRating, maxRating, callback);
  return r;
}

function updatePortion(val) {
  document.querySelector("#portien").innerHTML = val;
  var x = document.querySelectorAll("span[data-unit]");
  var i;
  for (i = 0; i < x.length; i++) {
      x[i].innerHTML = x[i].getAttribute("data-unit") * val;
  }
}
