$(function () {
	var frontH = $("#front").innerHeight(),
		header = $("#header"),
		scrolloffset = $(window).scrollTop;


	/* fixed header*/
	checkSkroll(scrolloffset);
	$(window).on("scroll", function () {
		scrolloffset = $(this).scrollTop();

		checkSkroll(scrolloffset);

	});

	function checkSkroll(scrolloffset) {
		if (scrolloffset >= frontH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}
	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});



	/* Menu nav toggle */
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	/* Slider */
	$("[data-slider]").slick({

		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000

	});

});