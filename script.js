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
}