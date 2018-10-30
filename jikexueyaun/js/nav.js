$(function() {
	var index = window.location.href.split("/").length - 1;
	var hrefOn = window.location.href.split("/")[index];
	$(".nav .list li a[href='" + hrefOn + "']").addClass("nav_on");

	$(".nav_ch_en .list a").hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).stop().animate({"margin-top":-40},300);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).stop().animate({"margin-top":0},300);
	});
})