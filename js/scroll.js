var svg = document.getElementById('devi');

$('.container').scroll(function() {
  $('.box').addClass(' blur')
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
       $('.box').removeClass(' blur')
      
    }, 50));
});
