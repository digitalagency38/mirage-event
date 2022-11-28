import * as globalFunctions from './modules/functions.js';
import $ from 'jquery';
globalFunctions.isWebp();

import PlacesAndcases from '../blocks/modules/places-and-cases/places-and-cases.js';
import Services from '../blocks/modules/services/services.js';

window.placesAndCases = new PlacesAndcases();
window.services = new Services();


$(document).ready(function() {
    window.placesAndCases.init();
    window.services.init();

    $(window).on('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var windowWidth = $(window).width() / 2;
        var windowHeight = $(window).height() / 2;
        $('.translateOnMouseMove').each(function() {
            var translateSpeed = $(this).attr('data-animateSpeed');
            $(this).css({
                transform: `translate( ${ (windowWidth - x)/translateSpeed}px, ${( windowHeight - y )/translateSpeed}px)`
            });
        });
        $('.rotateOnMouseMove').each(function() {
            var rotateSpeed = $(this).attr('data-animateSpeed');
            $(this).css({
                transform: `rotateX( ${ (windowHeight - y)/rotateSpeed}deg) rotateY(${( windowWidth - x )/rotateSpeed * -1 }deg) translateZ(-300px) scale(1.3)`
            });
            console.log(windowWidth, windowHeight)
        });
    });
});