$(document).ready(function(){
	
	// top family site
	$('.tsite-wrap > li .tsite').on("click", function(){
		var state = $(this).next('.dep2wrap').css('display');
		var checked = 'block';
		if( state != checked ){
			$('.tsite-wrap > li .dep2wrap').hide();
			$(this).next('.dep2wrap').show();
		}else {
			$(this).next('.dep2wrap').hide();
		}
	});
	
	// header
	$('.header .gnb > li').on("mouseover focusin", function(){
		$('.header .gnb .subgnb-wrap').stop().slideUp();
		$('.subgnb-wrap', this).stop().slideDown();
		if($('.subgnb-wrap .inner', this).height()<100){
			$('.subgnb-tit', this).hide();
		}
	});
	$('.header .gnb > li').on("mouseleave focusout", function(){
		$('.header .gnb .subgnb-wrap').stop().slideUp();
		$('.subgnb-wrap', this).stop().slideUp();
	});
	
	// sitemap menu popup
	$('.tsitemap-wrap .tsitemap_btn').on("click", function(){
		if(!$('.tsitemap-wrap .subgnb-wrap').hasClass('on')){
			$('.tsitemap-wrap .subgnb-wrap').addClass('on');
			$(this).addClass('off');
			return false;
		}else {
			$('.tsitemap-wrap .subgnb-wrap').removeClass('on');
			$(this).removeClass('off');
			return false;
		}
	});
	
	// search layer popup
	$('.tsearch-btn').on("click", function(){
		$('.tsearch-wrap .search-layer').toggle();
		$(this).toggleClass('on');
		$('.mbsearch-bg').toggle();
	});

	$(".pSearch-ico").click(function (e) {
		$("[name=tSearch-form]").submit()
	})
	
	// font setting
	$("body").on("click", ".txt-minus", function(){
		if($('#fontSize').css('transform') == "none") {
			$('#fontSize').css('transform','scale(0.95)');
			$('#fontSize').css('-webkit-transform','scale(0.95)');
			$('#fontSize').css('-webkit-transform-origin','50% 0');
			$('#fontSize').css('-moz-transform','scale(0.95)');
			$('#fontSize').css('-moz-transform-origin','50% 0');
			$('#fontSize').css('-o-transform','scale(0.95)');
			$('#fontSize').css('-o-transform-origin','50% 0');
			$('#fontSize').css('-ms-transform','scale(0.95)');
			$('#fontSize').css('-ms-transform-origin','50% 0');
		}else {
			var matrix = $('#fontSize').css('transform');
			var translate_val = matrix.match(/-?[\d\.]+/g);
			var scale = translate_val[0];
			
			if(scale <= 0.8) return false;
			scale = Number(scale) - 0.05;
			
			scale = "scale(" + scale + ")";
			$('#fontSize').css('transform',scale);
			$('#fontSize').css('-webkit-transform',scale);
			$('#fontSize').css('-webkit-transform-origin','50% 0');
			$('#fontSize').css('-moz-transform',scale);
			$('#fontSize').css('-moz-transform-origin','50% 0');
			$('#fontSize').css('-o-transform',scale);
			$('#fontSize').css('-o-transform-origin','50% 0');
			$('#fontSize').css('-ms-transform',scale);
			$('#fontSize').css('-ms-transform-origin','50% 0');
		}
		return false;
	});
	
	$("body").on("click", ".txt-origin", function(){
		$('#fontSize').css('transform','scale(1)');
		$('#fontSize').css('-webkit-transform','scale(1)');
		$('#fontSize').css('-webkit-transform-origin','50% 0');
		$('#fontSize').css('-moz-transform','scale(1)');
		$('#fontSize').css('-moz-transform-origin','50% 0');
		$('#fontSize').css('-o-transform','scale(1)');
		$('#fontSize').css('-o-transform-origin','50% 0');
		$('#fontSize').css('-ms-transform','scale(1)');
		$('#fontSize').css('-ms-transform-origin','50% 0');

		return false;
	});
	
	$("body").on("click", ".txt-plus", function(){
		if($('#fontSize').css('transform') == "none") {
			$('#fontSize').css('transform','scale(1.05)');
			$('#fontSize').css('-webkit-transform','scale(1.05)');
			$('#fontSize').css('-webkit-transform-origin','50% 0');
			$('#fontSize').css('-moz-transform','scale(1.05)');
			$('#fontSize').css('-moz-transform-origin','50% 0');
			$('#fontSize').css('-o-transform','scale(1.05)');
			$('#fontSize').css('-o-transform-origin','50% 0');
			$('#fontSize').css('-ms-transform','scale(1.05)');
			$('#fontSize').css('-ms-transform-origin','50% 0');
		}else {
			var matrix = $('#fontSize').css('transform');
			var translate_val = matrix.match(/-?[\d\.]+/g);
			var scale = translate_val[0];

			if(scale >= 2) return false;
			scale = Number(scale) + 0.05;
			
			scale = "scale(" + scale + ")";
			$('#fontSize').css('transform',scale);
			$('#fontSize').css('-webkit-transform',scale);
			$('#fontSize').css('-webkit-transform-origin','50% 0');
			$('#fontSize').css('-moz-transform',scale);
			$('#fontSize').css('-moz-transform-origin','50% 0');
			$('#fontSize').css('-o-transform',scale);
			$('#fontSize').css('-o-transform-origin','50% 0');
			$('#fontSize').css('-ms-transform',scale);
			$('#fontSize').css('-ms-transform-origin','50% 0');
		}

		return false;
	});

	
	// print
	$('.screen_print').click(function(){
		$("#fontSize").print({
			globalStyles: true,
			mediaPrint: false,
			stylesheet: null,
			noPrintSelector: ".no-print",
			iframe: true,
			append: null,
			prepend: null,
			manuallyCopyFormValues: true,
			deferred: $.Deferred(),
			timeout: 750,
			title: null,
			doctype: '<!doctype html>'
		});
	});
	
	// foot family site
	$('.footsite .sort').on("click", function(e){
		e.preventDefault()
		if( $(this).hasClass('rotate') ){
			$(this).removeClass('rotate');
			$(this).parent().find('.sortlist').hide();
		}else {
			$('.footsite .sortlist').hide();
			$(this).parent().find('.sortlist').show();
			$('.footsite .sort').removeClass('rotate')
			$(this).addClass('rotate');
			$('#sitelink_bg').fadeIn("500");
		}
	})

	$("#sitelink_bg").click(function(e){
		e.preventDefault()
		var w_width = window.innerWidth;
		$('.footsite .sort').removeClass('rotate');
		$('.sortlist').hide();
		$('.infomation .gowrap .linkbox').hide();
		$('.infomation .gowrap .golink').removeClass('on');
		if (w_width <= 797) {
			$('.tsite-wrap').hide();
		}
		console.log(w_width)
		$(this).fadeOut("500");
	})
	
	// mobile menu
	$('.mb-gnb .mbtit').click(function(){
		$('.mb-gnb .mbtit').removeClass('on');
		$('.mb-gnb .mblist').hide();
		$(this).addClass('on');
		$(this).next('.mblist').show();
		return false;
	});
	
	$('.mb-gnb .mblist .deptit').click(function(){
		var state = $(this).hasClass('on');
		
		if(state){
			$(this).removeClass('on');
			$('.mb-gnb .mblist .deplist').stop().slideUp();
		}else{
			$('.mb-gnb .mblist .deptit').removeClass('on');
			$(this).addClass('on');
			$('.mb-gnb .mblist .deplist').stop().slideUp();
			$(this).next('.deplist').stop().slideDown();
		}
	})

	// a click return false	
	$('.eventno a, .eventno').click(function(e){ e.preventDefault() })

	/********** sub ************/
    /*********************************/
    /*********************************/
	
	var dep1List = $('.sub_lnb .dep1 > li > a');
	var dep2List = $('.sub_lnb .dep2 > li > a');
	
	var dep1Text = $('.loc_navi .depth2').text();
	var dep2Text = $('.loc_navi .depth3').text();
	
	 $.each(dep1List,function(index, value){
		 if(dep1Text == value.innerText){
		 	value.className="on";
		 }
	 });
	 $.each(dep2List,function(index, value){
		 if(dep2Text == value.innerText){
		 	value.className="on";
		 }
	 });
	 
	
	/*$('.sub_lnb .dep1 > li > a').on('mouseover focusin', function(){
		$(this).parent().find('.dep2').show();
	})
	$('.sub_lnb .dep1 > li').on('mouseleave', function(){
		if( $("> a", this).is('.on')  == false ){
			$(this).find('.dep2').hide();
		}
	})
	$('.sub_lnb .dep1 > li .dep2 > li:last-child').on('focusout', function(){
		if( $(this).parent().parent().find("> a").is('.on') == false ){
			$(this).parent().hide();
		}
	})*/

	// tab
	$('#tabBtn > .tbtn').click(function(){
		var tabNum = $(this).index();
		$('#tabBtn > .tbtn').removeClass('on');
		$(this).addClass('on');
		
		$('#tabCnt > .cntbox').removeClass('on');
		$('#tabCnt > .cntbox').eq(tabNum).addClass('on');
		
		return false;
	})

	/*
	 * member.js
	 */
	$('.infomation .gowrap .golink').on('click',function(){
		var $this = $(this);
		
		if( $this.hasClass('on') ){
			$this.find('.linkbox').hide();
			$this.removeClass('on');
		}else{
			$('.infomation .gowrap .linkbox').hide();
			$('.infomation .gowrap .golink').removeClass('on');
			$this.find('.linkbox').show();
			$this.addClass('on');
			$('#sitelink_bg').fadeIn("500");
		}
	});

});