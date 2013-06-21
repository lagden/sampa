// Rotas
(function(window) {

    'use strict';

    var $ = window.jQuery;

    //setup crossroads
    crossroads.addRoute('home');
    crossroads.addRoute('sobre-o-evento');
    crossroads.addRoute('palestrantes');
    crossroads.addRoute('programacao');
    crossroads.addRoute('local');
    crossroads.addRoute('blog');
    crossroads.addRoute('contato');
    crossroads.routed.add(scrolla);

    function scrolla(rota, data)
    {
        console.log('Navegacao' , '#', rota, data);
        var i = $('#'+rota);
        TweenLite.to(window, 2, {scrollTo: {y: i.offset().top}, ease:Power4.easeInOut});
    }

    //setup hasher
    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

    hasher.setHash('home');

})(window);