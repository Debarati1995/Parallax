
$(document).ready(function () {

	$(window).scroll(function () {
		var scroll_measure = $(window).scrollTop();
		console.log(scroll_measure);
		
		var segment = $('.segment1').height();
		var mermid =  $('.mermid').height();
		if (scroll_measure > 0 && scroll_measure < segment) {
			$('.segment1').css({'background-position':  '' + (-(scroll_measure/50)) + 'px 0px'});
			$(".fish").css({ "transform": "translate(-" + (scroll_measure * 0.5) + "px," + (scroll_measure) + "px" });
			$(".starfish").css({ "transform": "rotate(" + scroll_measure + "deg)", "left": ((scroll_measure) * 0.5) + 'px' });
		}
		
		if (scroll_measure > 100) {
			$(".layer1 img").css({
				'transform': 'translate3d(0px,-' + (scroll_measure * 0.1) + 'px,0px)'
			});
			$(".layer2 img").css({
				'transform': 'translate3d(0px,-' + (scroll_measure * 0.18) + 'px,0px)'
			});
			$(".layer3 img").css({
				'transform': 'translate3d(0px,-' + (scroll_measure * 0.25) + 'px,0px)'
			});
		}
		if (scroll_measure > 300) {
			$(".mermid1").css({
				'transform': 'translate3d(' + (-(scroll_measure - 500) *1.2) + 'px,'+((scroll_measure - 500) * 2)+'px,0px)'
				
			});
			$(".mermid2").css({
				'transform': 'translate3d(' + ((scroll_measure - 400) * 0.5) + 'px,-' + ((scroll_measure-400) * 0.5) + 'px,0px)'
			});
			
		}
		if(scroll_measure>631){
			$(".mermid1").css({
				'transform':'rotateZ(45deg)',
				'top': (-(scroll_measure) * 1.2) + 'px)',
				'left':  (-(scroll_measure) * 1.2) + 'px)'
			});
		}
		// if(scroll_measure > 260 && scroll_measure<(segment+mermid)){
				
		// 		$('.mermid').css({'background-position':  '0px ' + (-(scroll_measure/10)) + 'px'});
		// }
		
		// if (scroll_measure > 372) {
		// 	$(".mermid1").fadeIn(1000);
		// }
		// else {
		// 	$(".mermid1").fadeOut(1000);
		// }
		// if(scroll_measure>624){
		// 	$('.turtle').css({
				
		// 	});
		// }

	});
});