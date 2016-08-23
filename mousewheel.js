$.fn.extend({
	mousewheel: function(fn) {
		
		$.each($(this),function (index,obj){
			var ff = window.navigator.userAgent.indexOf("Firefox");
			
			if (ff != -1) {
				//火狐
				obj.addEventListener("DOMMouseScroll", wheel, false);
			} else {
				obj.onmousewheel = wheel;
			}

			function wheel(ev) {
				var ev = ev || window.event;
				var down = true; //
				if (ev.detail) {
					//火狐
					down = ev.detail < 0;
				} else {
					down = ev.wheelDelta > 0;
				}
				//Function.call(对象,down,ev),apply(对象,数组);
				//			fn(down);
				fn.call(obj,ev,down);
//								fn.apply(obj, [ev, down]);
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				return false;
			}
		});	
	}
});