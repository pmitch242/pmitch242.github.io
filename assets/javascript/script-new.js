$(document).ready(function () {
    const introSection = $('#intro-section');
    const nextSection = $('#next-section');
    const optionSection = $('#option-section');
    const navbar = $('#navbar');

    optionSection.hide();
    navbar.hide();

    nextSection.on('click', function(){
        introSection.hide();
        optionSection.show();
    })

});


