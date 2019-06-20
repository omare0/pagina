var url = window.location.href;
var swLocation = '/pagina/sw.js';

if ( navigator.serviceWorker ) {

    if(url.includes('localhost')) {
        swLocation = '/sw.js';
    } 

    navigator.serviceWorker.register(swLocation);
}

$(document).ready(function(){

    var header = $('header'),
                btn    = $('button.toggle-nav');

    btn.on('click', function(){
          header.toggleClass('active');
    });

});