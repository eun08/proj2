$(function(){

    slide = setInterval(function(){
        $('.notice_list li:first-child').animate({
            'margin-top':'-20px'},600,function(){
                $('.notice_list').append($('.notice_list li:first-child'));
                $('.notice_list li:last-child').css({'margin-top':0})
            
        });//animate end
    },2000);//setInterval end

})//jq