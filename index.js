// Loader
$(window).on('load',()=>{
    $('#loading').hide();
   
  });
  
  
  //  slider animation
  const showslider = () => {
    document.querySelector('#slider').classList.toggle('active');
  };

  // const= $('#firstbtn');
  
  const start_btn =()=>{
    alert("You  have to login first");
  };

  $( "a.About" ).click(function( event ) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
});


  // second Container animation
  $(document).ready(() => {
    $(window).scroll(() => {
      var scrollposition = $(document).scrollTop();
      // console.log(scrollposition);
      // for Nav animation
      if((scrollposition > 20) && (scrollposition <200)){
        $('#nav').addClass('animated fadeInDown');
      }
      // for second Container
      if((scrollposition>280) && (scrollposition < 500)){
        $('#secondContent1').addClass('animated fadeInUp ');
        $('.secondContent2').addClass('animated fadeInDown');
      }
      if((scrollposition>800) && (scrollposition < 940)){
        $('.card1').addClass('animated bounceInLeft slow');
        $('.card2').addClass('animated bounceIn slow');
        $('.card3').addClass('animated bounceInRight slow');
      }
    });
  });