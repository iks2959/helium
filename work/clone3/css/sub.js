$(function(){
	
	var device_state;
	var minState = false;
	var maxHeight = -1;
	var window_w = $(window).width();
	
	$(window).load(subFn).resize(subFn);
	
	function subFn(){
		var window_w = $(window).width()+17;
		maxHeight = -1;

		if( window_w >= 1024 ){
			
			if( device_state != "pc" ){
				device_state ="pc";
                
                /* reponsive style reset */
                $(".stepbox, .submapimg-wrap").removeAttr("style");
                /* subgnb height auto */                
				autoHeight('.stepbox');
                
			}
			
		}else if( window_w < 1024 && window_w >= 797 ){
			
			if( device_state != "tablet" ){
				device_state ="tablet";
				
                /* reponsive style reset */
                $(".stepbox, .submapimg-wrap").removeAttr("style");
                /* subgnb height auto */                
				autoHeight('.stepbox');
                
			}
			
		}else if( window_w < 797 ){
			
			if( device_state != "mobile" ){
				device_state ="mobile";
				
               /* reponsive style reset */
                $(".stepbox, .submapimg-wrap").removeAttr("style");
			}
			
		}
	}
	
	autoHeight('.orgdesc');
	autoHeight('.type2 .stepbox');
	
	function autoHeight(select){
		$(select).each(function() {
			maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		});
		$(select).each(function() {
			$(this).css('minHeight',maxHeight);
		});
	}
		
	$('.toggle_dl dd').show();
	$('.toggle_dl dt').addClass('cur');
	$('.toggle_dl dt').on('click', function(){
		var $this = $(this),
			$next = $(this).next('dd');
		if($this.hasClass('cur')){
			$this.removeClass('cur');
			$next.stop().slideUp();
		}
		else{
			$this.addClass('cur');
			$next.stop().slideDown();
		}
	})
	
	$('.show_map').on('click', function(){
		$('.submapimg-wrap').show();
	})
	$('.close_map').on('click', function(){
		$('.submapimg-wrap').hide();
		return false;
	})
  	
	
})
