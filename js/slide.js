$(function(){

    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
      

    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });


    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
        
      });  

})//jq