
$.fn.extend({
	xian:function(obj,time1,opa){     
		$.each($(this), function(index,el){
			$(el).on('mouseenter', function(){
				$(el).find(obj).stop().animate({
					'opacity': opa||1
				},time1);
			});

		});
		$.each($(this),function(index,el){
			$(el).on('mouseleave', function(){
				$(el).find(obj).stop().animate({
					'opacity': 0
				},time1);
			});
		});
	}

});
