/* Foundation v2.2.1 http://foundation.zurb.com */
jQuery(document).ready(function ($) {
	$('a.navbar-brand').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,50);
		return false;
	});
	$('ul.navbar-nav li a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,50);
		return false;
	});
	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	
	}   
});