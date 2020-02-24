$(document).ready(function () {
    const introSection = $('#intro-section');
    const nextSectionBtn = $('#next-section');
    const optionSection = $('#option-section');
    const navbar = $('#navbar');
    const aboutBtn = $('.about-btn');
    const portfolioBtn = $('.port-btn');
    const aboutOptionDiv = $('#about-option');
    const portfolioOptionDiv = $('#portfolio-option');
    const aboutSection = $('#about-section');
    const portfolioSection = $('#portfolio-section');

    optionSection.hide();
    navbar.hide();

    nextSectionBtn.on('click', function (event) {
        event.preventDefault();
        introSection.addClass('animated slideOutUp');
        introSection.on('animationend', function () {
            introSection.hide();
            optionSection.show();
            optionSection.addClass('animated slideInUp');
        });
    })

    aboutBtn.on('click', function (event) {
        event.preventDefault()
        optionSection.css('background-color', '#f6f8ff')
        portfolioOptionDiv.addClass('animated slideOutRight');
        aboutOptionDiv.addClass('animated fadeOutRight')
        portfolioOptionDiv.on('animationend', function () {
            optionSection.hide();
            aboutSection.show();
        });
    })

    portfolioBtn.on('click', function (event) {
        event.preventDefault()
        optionSection.css('background-color', '#083d77')
        aboutOptionDiv.addClass('animated slideOutLeft');
        portfolioOptionDiv.addClass('animated fadeOutLeft')
        aboutOptionDiv.on('animationend', function () {
            optionSection.hide();
            portfolioSection.show();
        });
    })

});


