$(document).ready(function(){
    var $html = $("html");
    var page = 1;
    var lastPage = $(".list").length;
    $html.animate({scrollTop:0},10);
    window.addEventListener("wheel", function(e){
		e.preventDefault();
	},{passive : false});
    var timeout;
    $(window).on("wheel", function(e){
        if($html.is(":animated")) return;
          //이전 휠 이벤트 제거
        clearTimeout(timeout);
        timeout = setTimeout(function(){ //다시 휠 이벤트 발생  0.1초후
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
        }, 50);
    });

    // window.onload = function () {
    //     let elm = ".list";
    //     $(elm).each(function (index) {
    //         // 개별적으로 Wheel 이벤트 적용
    //         $(this).on("mousewheel DOMMouseScroll", function (e) {
    //             e.preventDefault();
    //             var delta = 0;
    //             if (!event) event = window.event;
    //             if (event.wheelDelta) {
    //                 delta = event.wheelDelta / 120;
    //                 if (window.opera) delta = -delta;
    //             } 
    //             else if (event.detail)
    //                 delta = -event.detail / 3;
    //             var moveTop = $(window).scrollTop();
    //             var elmSelecter = $(elm).eq(index);
    //             // 마우스휠을 위에서 아래로
    //             if (delta < 0) {
    //                 if ($(elmSelecter).next() != undefined) {
    //                     try{
    //                         moveTop = $(elmSelecter).next().offset().top;
    //                     }catch(e){}
    //                 }
    //             // 마우스휠을 아래에서 위로
    //             } else {
    //                 if ($(elmSelecter).prev() != undefined) {
    //                     try{
    //                         moveTop = $(elmSelecter).prev().offset().top;
    //                     }catch(e){}
    //                 }
    //             }
                 
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


