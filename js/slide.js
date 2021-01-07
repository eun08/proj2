$(function(){

  // slickslider

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


     // flexslider

      
        SyntaxHighlighter.all();
      });
      $(window).load(function(){
        $('#carousel').flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,          
          itemWidth: 370,
          itemMargin: 30,
          asNavFor: '#slider'
        });
  
        $('#slider').flexslider({
          animation: "slide",
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          sync: "#carousel",
          start: function(slider){
            $('body').removeClass('loading');
          }
        });
      




})//jq