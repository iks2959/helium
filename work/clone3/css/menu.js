/**
 * 경상북도의회 메뉴 스크립트
 *
 *
 * @author E.J Jeong
 * @since 2018.08.02 *
 */
$(document).ready(function() {

	$('#topmenu .menu').hide();
	$('#menuArea').css('height','72px');

	$('#topmenu > li > a ').each(function(){

		$(this).bind("mouseover focusin",function(){
			$('#topmenu .menu').hide();
			$('#topmenu .menu').show().stop(true,false).delay(150);
			var ul_height = ($('#topmenu .menu').outerHeight());
			var gnb_height = ul_height + 72;//154

			$('#menuArea').show().stop(true,false).animate({height:gnb_height},{duration:500,easing:"easeOutExpo"});
			$('#menuArea').css({background:"url(/images/common/bg_menu.gif) repeat-x 0 72px"})
			
		});
	});

	 $('#menuArea').mouseleave(function() { 
		$('#menuArea').stop(true,false).animate({height:'72px'},{duration:500,easing:"easeOutExpo"});
		$('#topmenu .menu').hide();
	}); 
	 
	$("a").filter(":not(#topmenu > li  a)").focus(function(){
		$('#topmenu > li > div').hide();
		$('#menuArea').stop(true,false).animate({height:'72px'},{duration:500,easing:"easeOutExpo"});
	});

});

