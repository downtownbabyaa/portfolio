$(document).ready(function(){
    var $html = $("html");
    var page = 1;
    var lastPage = $(".list").length;
    
    $html.animate({scrollTop:0},10);

    $(window).on("wheel", function(e){
		if($html.is(":animated")) return;

		if(e.originalEvent.deltaY > 0){
            if(page == lastPage) return;
			page++;
            console.log(page);
		}else if(e.originalEvent.deltaY < 0){
			if(page == 1) return;
			page--;
            console.log(page);
		}
		var posTop = (page-1) * $(window).height();
	 
		$html.animate({scrollTop : posTop});
	});
    $('.ptf').slick({
        dots: true,
        fade: true,
        swife: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        vertical: false,
        infinite: true,
    });

    function copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        }
    
        $('.copybtn1').click(function() {
          copyToClipboard('pkpk5030@gmail.com');
          alert('이메일 주소를 복사하였습니다.');
        });
    
})


// window.onload = function () {
//     $(".list").each(function () {
//         // 개별적으로 Wheel 이벤트 적용
//         $(this).on("mousewheel DOMMouseScroll", function (e) {
//             e.preventDefault();
//             var delta = 0;
//             if (!event) event = window.event;
//             if (event.wheelDelta) {
//                 delta = event.wheelDelta / 120;
//                 if (window.opera) delta = -delta;
//             } else if (event.detail) delta = -event.detail / 3;
//             var moveTop = null;
//             // 마우스휠을 위에서 아래로
//             if (delta < 0) {
//                 if ($(this).next() != undefined) {
//                     moveTop = $(this).next().offset().top;
//                     if($(this).index() == 3) return;
//                     console.log(index);
//                 }
//             // 마우스휠을 아래에서 위로
//             } else {
//                 if ($(this).prev() != undefined) {
//                     moveTop = $(this).prev().offset().top;
//                 }
//             }
//             // $(window).on("wheel", function(e){
	 
//             //     if($html.is(":animated")) return;
             
//             //     if(e.originalEvent.deltaY > 0){
//             //         if(page== lastPage) return;
             
//             //         page++;
//             //     }else if(e.originalEvent.deltaY < 0){
//             //         if(page == 1) return;
             
//             //         page--;
//             //     }
//             //     var posTop = (page-1) * $(window).height();
             
//             //     $html.animate({scrollTop : posTop});
             
//             // });
//             // 화면 이동 0.8초(800)
//             $("html,body").stop().animate({
//                 scrollTop: moveTop + 'px'
//             }, {
//                 duration: 500, complete: function () {
//                 }
//             });
//         });
//     });
// }
