javascript: 
(function() {
    function __include(x) {
        var n = document.createElement("script");
        n.type = "text/javascript";
        n.async = "true";
        n.src = x;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(n);
    }

    function __doInclude() {
        __include("https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js");
    }
    __doInclude();
    setTimeout(function(){
      $("body")
        .append($('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;"><defs><filter id="blur"><feGaussianBlur in="SourceGraphic" stdDeviation="0,0" id="blurFilter" /></filter></defs></svg>'))
        .css("-webkit-filter", 'url("#blur")');
      
      var scrollyWollyTimeyOutey = null;
      $(window).scroll(function(event){
        /*console.log("hey");*/
        $("#blurFilter")[0].setAttribute("stdDeviation","0,12");
        if(scrollyWollyTimeyOutey){ clearTimeout(scrollyWollyTimeyOutey); }
        scrollyWollyTimeyOutey = setTimeout(function(){
          /*console.log("unsetty");*/
          $("#blurFilter")[0].setAttribute("stdDeviation","0,0");
          forceRedraw($("body")[0]);
          scrollyWollyTimeyOutey = null;
        }, 32);
      });

      function forceRedraw(sel){
        /*sel.style.display='none';
        sel.offsetHeight;
        sel.style.display='';*/
        /*$(window).trigger('resize');*/
        $(sel).hide().show(0);
      }
    }, 1000);
})();