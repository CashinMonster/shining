//$(document).ready(function() {
//jQuery.preloadImages = function() {  
// for(var i = 0; i < arguments.length; i++) {  
//     $("<img />").attr('src', arguments[i]);  
// }  
//};  
//// how to use
//for(var i=1;i<51;i++){
//	$.preloadImages('img/img3/i'+i+'.jpg' ); 
//}
//}arrT[minIndex]);


//for(var i=1;i<51;i++){
//	$.preload('img/img3/i'+i+'.jpg' ); 
//}

//图片预加载-----------------------------------------------------
var arr = [];
var arrImg=[];
for (var i = 1; i < 51; i++) {
	arr.push('img/i' + i + '.jpg')
}
loadingFn({
	imgArr: arr,
	loadingOver: function(imgs) {
		if ($(window).width() < 490) {
			//			$('.waterfall ul li').css({
			//				'width':0.5*$('.waterfall ul').width()
			//			})

			//这个方法想达到li的width发生变化,但是是错误的.Colss(2,0.5)中生成的li的width还是css中的25%.即作用不到下面生成的li;
			//方法是在Colss中添加li的width的变化.
			Colss(2, 0.5);

		} else {
			Colss(4, 0.25);
		}
      $('.waterfall li a').xian('.fangda',400);
 //下面是错误的--------------------------------  ----------------  ----------------       
      
//   $('.waterfall li').xian('.waterfall li a',400,0.5);
  //下面正确----------------------------- --------------------------------         
     $('.waterfall li').xian('a',400,0.5);
 //点击放大----------------------------- -------------------------------- 
     $.each($('.waterfall li'),function(index,el){
			$(el).on('click', function(){
				$('.doom').css({
					'position':'fixed',
					'z-index':500
				});
				$('.doom1').css({
					'position':'fixed',
					'z-index':501
				});
				$('.doom').stop().animate({
					'opacity':0.5
				},300);
		var fangda=$('<div class="fangdaImg"><img src="img/i' +arrImg[index] + '.jpg"/></div>').appendTo('.doom1')
		      fangda.animate({
		      	'width':1.8*$(el).find('.imgs').width(),
				'height':1.8*$(el).find('.imgs').height(),				
			},600);
		});

	});
//点击缩小----------------------------- -------------------------------- 		
		
		$('.doom1').on('click', function(){
			$('.fangdaImg').remove();
				$('.doom').css({
					'position':'absolute',
					'z-index':-111
				});
				$('.doom1').css({
					'position':'absolute',
					'z-index':-110
				});
				$('.doom').stop().animate({
					'opacity':0
				},300);
			});
			
	//点不到 $('.fangdaImg')---------------------------------------------------------------------------
//			$('.fangdaImg').on('click', function(){
//
//			$(this).remove();
//			$('.doom').css({
//					'position':'absolute',
//					'z-index':-111
//				});
//			$('.doom1').css({
//					'position':'absolute',
//					'z-index':-110
//				});	
//				$('.doom').stop().animate({
//					'opacity':0
//				},300);
//			});
	}
});



function Colss(cols, zuo) {
	function randFn(min, max) {
		return parseInt(Math.random() * (max - min)) + min;
	}
	var num = 0;
	//		var cols = 4;
	var arrT = [];
	for (var i = 0; i < cols; i++) {
		arrT[i] = 0;
	}
	var arrI = [];
	var arrM = [];
	var arrTop = [];
	var ulWidth = $('.waterfall ul').width();
	while(arrI.length<50){
		var randfn = randFn(1,51);
		var bol = true;
			for(var j=0;j<arrI.length;j++){
				if(randfn==arrI[j]){
					bol = false;
				  	break;
				}
			}
			if(bol){
				arrI.push(randfn);

	//		alert(arrI);
		
		
			var lis = $('<li><img class="imgs" src="img/i' + randfn + '.jpg"/><a href="###"><img class="fangda" src="img/fangda.png"/></a></li>');
			arrImg.push(randfn);
			
			//添加li的width变化---------------------------
		lis.css({
				'width': zuo * $('.waterfall ul').width()
			})
			//	------------------------------------------------------------------------------	

		lis.appendTo('.waterfall ul');


		var min = arrT[0];
		var minIndex = 0;
		for (var k = 0; k < arrT.length; k++) {
			if (min > arrT[k]) {
				min = arrT[k];
				minIndex = k;
			}
		}
		lis.css({
			'top': arrT[minIndex] + "px",
			'left': minIndex * zuo * $('.waterfall ul').width() + 'px'
		})

		//			$('.waterfall .imgs').eq(i).css({
		//					'margin-top':0.02*$('.waterfall li').eq(i).width()
		//			});
		//			$('.waterfall a').eq(i).css({
		//					'height':$('.waterfall .imgs').eq(i).height(),
		//					'top':0.02*$('.waterfall li').eq(i).width(),
		//					'left':0.01*$('.waterfall li').eq(i).width()
		//			});
		//同一效果-------------------------------------------------	
		lis.find('.imgs').css({
			'margin-top': 0.02 * lis.width()
		});
		lis.find('a').css({
			'height': lis.find('.imgs').height(),
			'top': 0.02 *lis.width(),
			'left': 0.01 * lis.width()
		});


		arrM.push(minIndex);
		arrTop.push(arrT[minIndex]);
		arrT[minIndex] +=(lis.height());


		//设定ul的高度--------------------------------------------------
		var min1 = arrT[0];
		var minIndex1 = 0;
		for (var k = 0; k < arrT.length; k++) {
			if (min1 < arrT[k]) {
				min1 = arrT[k];
				minIndex1 = k;
			}
		}

		$('.waterfall ul').css({
			'height': arrT[minIndex1]
		});			
		}
	}

	//		屏幕缩放,Position等比缩放-------------------------------------------------
	window.onresize = function() {
		for (var i = 0; i < 50; i++) {
			$('.waterfall li').eq(i).css({
				'width': zuo * $('.waterfall ul').width(),
				'top': arrTop[i] * $('.waterfall ul').width() / ulWidth + "px",
				'left': arrM[i] * zuo * $('.waterfall ul').width() + 'px'
			})
			$('.waterfall .imgs').eq(i).css({
				'margin-top': 0.02 * $('.waterfall li').eq(i).width()
			});
			$('.waterfall a').eq(i).css({
				'height': $('.waterfall .imgs').eq(i).height(),
				'top': 0.02 * $('.waterfall li').eq(i).width(),
				'left': 0.01 * $('.waterfall li').eq(i).width()
			});
		}
	}
}