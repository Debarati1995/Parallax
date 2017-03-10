
$(document).ready(function () {
	var left_pos=parseInt($('.starfish').css("left"));
	$(window).scroll(function () {
		var scroll_measure = $(window).scrollTop();
		console.log(scroll_measure);
		// $('div[data-type="parallax"]').each(function(){
        //       var acDetails = $(this);
        //       scrollStart = $(this).offset().top - $(window).innerHeight()*0.3;

        //        if( scroll_measure > scrollStart){
        //           var yPos = -( (scroll_measure%scrollStart) * acDetails.data('speed') );
        //          acDetails.css({'background-position':'center calc(1.0% + '+ yPos +'px)'});
        //        }
        //   });
		var segment = $('.segment1').height();
		var mermaid =  $('.mermaid').height();
		
		// if(parseInt($('.starfish').css("left"))==$(window).width()){
		// 	$('.starfish').css('left','0px');
		// }
		if (scroll_measure > 0 && scroll_measure < segment) {
			$('.segment1').css({'background-position':  '0px ' + (-(scroll_measure/5)) + 'px'});
			$(".fish").css({ "transform": "translate(-" + (scroll_measure * 0.5) + "px," + (scroll_measure) + "px" });

			$(".starfish").css({ "transform": "rotate(" + scroll_measure + "deg)", 'left': (left_pos+scroll_measure)+'px'});
			

			console.log(left_pos+'px');
		}
		// else{
		// 	$(".starfish").css({
		// 		"left": (left_pos-(scroll_measure * 0.2)) + 'px'
		// 	});
		// }
		
		if (scroll_measure > 100) {
			$(".layer1 img").css({
				'transform': 'translate3d(0px,-' + (scroll_measure * 0.15) + 'px,0px)'
			});
			$(".layer2 img").css({
				'transform': 'translate3d(0px,-' + (scroll_measure * 0.19) + 'px,0px)'
			});
			$(".layer3 img").css({
				'transform': 'translate3d(0px,-' + (scroll_measure * 0.25) + 'px,0px)'
			});
		}
		if (scroll_measure > 300 && scroll_measure<630) {
			$(".mermaid1").css({
				'transform': 'translate3d(' + (-(scroll_measure - 500) *1.2) + 'px,'+((scroll_measure - 500) * 2)+'px,0px)'
			});
		}
		if(scroll_measure > 300){
			$(".mermaid2").css({
				'transform': 'translate3d(' + ((scroll_measure - 400) * 0.7) + 'px,-' + ((scroll_measure-400) * 1.5) + 'px,0px)'
			});
			
		}
		if(scroll_measure>640){
			$(".mermaid1").css({
				'transform':'rotateZ(45deg)'
				
			});

			// $(".mermaid1").eq(0).css({
			// 	transform: 'translate('+(-(scroll_measure/20) * 1.2) + 'px,'+((scroll_measure/90) * 1.2) + 'px'+')'
			// 	// 'top': (-(scroll_measure/20) * 1.2) + 'px',
			// 	// 'left':  ((scroll_measure/90) * 1.2) + 'px'
			// });
			
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
		 if(scroll_measure>1350){
		 	$('.turtle').css({
				'transform':'translate3d(-'+(scroll_measure-1380)+'px,'+(scroll_measure-1370)+'px,0px)'
			});
		 }
		 if(scroll_measure>1280){
			 $('.octopus').css({
				'transform':'translate3d(0px,'+(scroll_measure/10)+'px, 0px)'
			 });
		 }
		 if(scroll_measure>1483){
		 	$('.yellow-fish').css({
				'transform':'scale('+(1+((scroll_measure-1480)*0.003))+')',
				'right': ((scroll_measure-1480)*0.5) + 'px'
			});
			$('.group-of-fish').css({
				'transform':'translate3d('+(scroll_measure-1480)+'px,'+(scroll_measure-1470)+'px,0px)'
			});
		 }
	});
});