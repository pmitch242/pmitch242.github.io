$(document).ready(function () {
    const introSection = $('#intro-section');
    const nextSection = $('#next-section');
    const optionSection = $('#option-section');

    optionSection.hide();

    nextSection.on('click', function(){
        introSection.hide();
        optionSection.show();
    })

});


