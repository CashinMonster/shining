$('#nav a').on('mousedown',function(){
	$.each($('#nav a'), function() {
	$(this).removeClass('choose')
	});
	$(this).addClass('choose')	
});
//$(document).on('mousemove',function(){
	if($('#header').outerWidth()<850){
	var bol=true;
$('#header_wrap .nav1').on('mousedown',function(){
	if(bol){
	 $('#nav').slideDown();
	 bol=false;
	}else{
		$('#nav').slideUp();
	 bol=true;
	}
});
}
//})




//--------------------------------------------------------------------------------------------------

//$('.content a').on('mouseenter',function(){
////	alert($(this).index())  始终为0; 说明this是指'content a';而不是触发事件的那个特定'content a'
//	$(this).animate({
//		'opacity':1
//	});
//})
//--------------------------------------------------------------------------------------------------

//$.each($('.content a') ,function(index,el){
//	$(el).on('mouseenter',function(){	
//	$(el).find('.img2').animate({
//		'opacity':1
//	},300);
//	$(el).find('.middle1').animate({
//		   'opacity':1
//	},300);
//});	
//});
//$.each($('.content a') ,function(index,el){
//	$(el).on('mouseleave',function(){	
//	$(el).find('.img2').animate({
//		'opacity':0
//	},300);
//	$(el).find('.middle1').animate({
//		'opacity':0
//	},300);
//});	
//});



