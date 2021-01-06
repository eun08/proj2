$(function(){

    slide = setInterval(function(){
        $('.notice_list li:first-child').animate({
            'margin-top':'-20px'},600,function(){
                $('.notice_list').append($('.notice_list li:first-child'));
                $('.notice_list li:last-child').css({'margin-top':0})
            
        });//animate end
    },2000);//setInterval end

   
        var sta = 1; //버튼이 햄버거 상태이고 팝업창이 안 열린 상태
        $('.all_menu').click(function(){
            $(this).toggleClass('on');//단순디자인 on/off로 변경시에만 이용
           if (sta == 1) {
               $(this).addClass('on');
               $('.menu_box').fadeIn();
               sta = 2;//상태가 바뀜
           } else {
               $(this).removeClass('on');
               $('.menu_box').fadeOut();
               sta = 1;//상태가 바뀜
           }
        })//click 





})//jq