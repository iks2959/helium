$(function(){
	var device_state;
	var minState = false;
	var maxHeight = -1;
	var gnbHeight = $('.gnb').outerHeight();
	var window_w = window.innerWidth;
	$(window).load(responsiveFn).resize(responsiveFn);
	
	function responsiveFn(){
		var window_w = window.innerWidth+17;
		maxHeight = -1;
		if( window_w > 1200 ){
			if( !minState ){
				minState = true;
			}
		}else{
			minState = false;
		}
		if( window_w >= 1024 ){	
			if( device_state != "pc" ){
				device_state ="pc";
				/* reponsive style reset */
				$("html, body").removeAttr("style");
				$(".mbheader-bg, .mbsearch-bg, .mbheader, .search-layer, .mbheader-close, .tsite-wrap, .mtsite-wrap").removeAttr("style");
				$(".sitemap-layer").removeClass("on");
				$(".tsitemap_btn").removeClass("off");
				$(".mbheader-open, .mbheader-close").off("click");
				/* subgnb height auto */                
				subGnbHeight();
			}
		}else if( window_w < 1024 && window_w >= 797 ){
			if( device_state != "tablet" ){
				device_state ="tablet";
				/* reponsive style reset */
				$("html, body").removeAttr("style");
				$(".mbheader-bg, .mbsearch-bg, .mbheader, .search-layer, .mbheader-close, .tsite-wrap, .mtsite-wrap").removeAttr("style");
				$(".sitemap-layer").removeClass("on");
				$(".tsitemap_btn").removeClass("off");
				/* mobile header close */
				$("#headerwrap").on("click", ".mbheader-close", mobiMenuCloseMo);
				/* mobile header open */
				$(".header").on("click", ".mbheader-open", mobiMenuOpenMo);
			}
		}else if( window_w < 797 ){
			if( device_state != "mobile" ){
				device_state ="mobile";
				/* reponsive style reset */
				$("html, body").removeAttr("style");
				$(".mbheader-bg, .mbsearch-bg, .mbheader, .search-layer, .mbheader-close, .tsite-wrap").removeAttr("style");
				$(".sitemap-layer").removeClass("on");
				$(".tsitemap_btn").removeClass("off");
				/* mobile header close */
				$("#headerwrap").on("click", ".mbheader-close", mobiMenuCloseMo);    
				/* mobile header open */
				$(".header").on("click", ".mbheader-open", mobiMenuOpenMo);
			}
		}
	}
	
	subGnbHeight();
	$(".header").on("click", ".mbheader-open", mobiMenuOpenMo);
	
	/* sub_gnb height */
	function subGnbHeight(){
		$('.sitemap-layer .subgnb-list > dl').each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$('.sitemap-layer .subgnb-list > dl').each(function() {
			$(this).height(maxHeight);
		});
	}
	
	function mobiMenuOpenPc(){
		$(".mbheader").show();
		return false;
	}
	
	function mobiMenuClosePc(){
		 $(".mbheader").hide();
		return false;
	}
	
	function mobiMenuOpenMo(){
		$("html, body").css("overflow-y","hidden");
		$('.mbheader-bg').fadeIn();
		$(".mbheader").not(":animated").show().animate({right:0});
		$('.mbheader-close').show();
		$(this).blur();
		return false;
	}
	
	function mobiMenuCloseMo(){
		$(".mbheader").not(":animated").animate({right:-310}, function(){
			$(this).hide();
			$('.mbheader-bg').fadeOut();
			$("html, body").css("overflow-y","");
			$('.mbheader-close').hide();
		});        
		return false;
	}
	
	$('.mobile_link_btn').on('click', function() {
		$('.tsite-wrap').toggle();
		$('#sitelink_bg').fadeIn("500");
	})
	
})
