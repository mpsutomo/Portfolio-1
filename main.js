const inspectScroll = () => {
    let $win = $(window);
  
    function checkScroll() {
      if ($win.scrollTop() > 66.67) {
        $win.off("scroll", checkScroll);
        $(".body-newsletter").fadeIn(2000);
      }
    }
    $win.scroll(checkScroll);
  };
  
  const closeNewsletter = () => {
    // let newscont =$("#newsletter")
    // newscont.animate().translationY(0);
    var pod = document.getElementById("pod");
    var newsletter = document.getElementById("newsletter");
    newsletter.setAttribute( 'class', 'newsletter-hide' );
    pod.setAttribute( 'class', 'newsletter-hide' );
    // newsletter.setAttribute( 'class', 'nshide' );
    pod.setAttribute( 'class', 'nshide' );


  }
  

  
  $( document ).ready(function() {
      inspectScroll(); 
  });