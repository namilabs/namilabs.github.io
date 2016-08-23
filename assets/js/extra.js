$(window).scroll(function () {
    scrOfY = 0;
    if( typeof( window.pageYOffset ) == "number" ) {
      scrOfY = window.pageYOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
      scrOfY = document.body.scrollTop;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
      scrOfY = document.documentElement.scrollTop;
    }

    if(scrOfY >= 51) {
      $('.logo-header').attr('src','/assets/img/logo.png');
    }else{
      $('.logo-header').attr('src','/assets/img/logo.png');
    }
});