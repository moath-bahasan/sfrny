import './assets/sass/styles.scss';
import '../node_modules/@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../node_modules/@laylazi/bootstrap-rtl/dist/js/bootstrap';
import 'jquery/dist/jquery';
import '@fortawesome/fontawesome-free/js/all';
import 'normalize.css/normalize.css';


$(function() {
    $("a.scroll").on('click', function(event) {

        const hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){});

    });
});
