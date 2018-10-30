$(function() {
	var bannerIndex = 0;
	var bannerSize = $(".img li").size();
	for (var i = 1; i < bannerSize+1; i++) {
		var li = "<li>" + i + "</li>";
		$(".num").append(li);
	}
	$(".img li").first().show();
	$(".num li").first().addClass('active');
	$(".num li").mouseover(function() {
		/* handle */
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		bannerIndex = index;
		$(".img li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
	});


	var bannerInter = setInterval(bannerMove, 2000);

	function bannerMove() {
		bannerIndex++;
		if (bannerIndex >= bannerSize) {
			bannerIndex = 0;
		}
		$(".num li").eq(bannerIndex).addClass('active').siblings().removeClass('active');
		$(".img li").eq(bannerIndex).fadeIn().siblings().fadeOut();
	}

	function bannerMoveLeft() {
		bannerIndex--;
		if (bannerIndex <= -1) {
			bannerIndex = bannerSize-1;
		}
		$(".num li").eq(bannerIndex).addClass('active').siblings().removeClass('active');
		$(".img li").eq(bannerIndex).fadeIn().siblings().fadeOut();
	}

	$(".out").hover(function() {
		/* Stuff to do when the mouse enters the element */
		clearInterval(bannerInter);
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		bannerInter = setInterval(bannerMove, 2000);
	});

	$(".out .left").click(function(event) {
		/* Act on the event */
		bannerMoveLeft();
	});

	$(".out .right").click(function(event) {
		/* Act on the event */
		bannerMove();
	});

})