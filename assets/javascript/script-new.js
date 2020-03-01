$(document).ready(function () {
    // =====================NOT USING!!!=====================
    const navbar = $('#navbar');
    const triviaBtn = $('#trivia-btn');
    const triviaInfoDiv = $('#trivia-info-div');
    const triviaImg = $('#trivia-img');
    const cardCol = $(".card-col");
    const cardHover = $('.card-hover');
    // =======================================================

    // =====================USING!!!!!!!!=====================
    const introSection = $('#intro-section');
    const optionSection = $('#option-section');
    const aboutBtn = $('.about-btn');
    const portfolioBtn = $('.port-btn');
    const aboutOptionDiv = $('#about-option');
    const portfolioOptionDiv = $('#portfolio-option');
    const aboutSection = $('#about-section');
    const portfolioSection = $('#portfolio-section');
    const card = $('.card');
    const exitBtn = $('.exit-btn');
    const backgroundHalf = $('.background-half');
    const introDiv = $('.intro-div')
    const introNextBtn = $('#intro-next');
    const switchOption = $('.switch-btn');
    const switchH3 = $('.switch-h3');
    const switchInfo = $('.switch-info');
    const switchArrow = $('.switch-arrow');
    // =======================================================


    // portfolioSection.hide();
    // backgroundHalf.hide();
    // optionSection.hide();
    applyCardHover();
    applySwitchHover();
    landingPageStart();

    introNextBtn.on('click', function (event) {
        event.preventDefault();
        introSection.addClass('animated slideOutUp');
        introSection.on('animationend', function () {
            introSection.hide();
            optionSection.show();
            optionSection.addClass('animated slideInUp');
        });
    });

    aboutBtn.on('click', function (event) {
        event.preventDefault()
        optionSection.css('background-color', '#f6f8ff')
        portfolioOptionDiv.addClass('animated slideOutRight');
        aboutOptionDiv.addClass('animated fadeOutRight')
        portfolioOptionDiv.on('animationend', function () {
            optionSection.hide();
            aboutSection.css('display', 'flex');
        });
    });

    portfolioBtn.on('click', function (event) {
        event.preventDefault();
        switchOption.show();
        $('body').css('background-image', 'none');
        $('body').css('background-color', '#083d77');
        aboutOptionDiv.addClass('animated slideOutLeft');
        portfolioOptionDiv.addClass('animated fadeOutLeft');
        aboutOptionDiv.on('animationend', function () {
            optionSection.hide();
            portfolioSection.css('display', 'flex');
            portfolioSection.addClass('animated fadeInRight')
            portfolioSection.on('animationend', function () {
                switchH3.addClass('animated fadeIn');
                switchH3.show();
                switchOption.css('box-shadow', '4px 4px 8px 0 rgba(0, 0, 0, .4)');
            });
        });
    });


    // Card effects

    function applyCardHover() {
        card.hover(
            function () {
                let cardDataId = $(this).attr('data-id');
                $('.p-div').hide();
                $(this).addClass('animated bounce infinite slow');
                $(this).children('.card-body').css('transform', 'scale(0.98)')
                $('.info-div').each(function () {
                    if ($(this).attr('data-id') === cardDataId + 'a') {
                        let infoDiv = $(this);
                        infoDiv.children('.exit-btn').hide();
                        infoDiv.css('transform', 'scale(0.8)');
                        infoDiv.css('filter', 'grayscale(1)');
                        infoDiv.show();
                        infoDiv.addClass('animated faster fadeIn');
                    }
                });
            },
            function () {
                $('.p-div').show();
                let cardDataId = $(this).attr('data-id');
                $(this).removeClass('animated bounce infinite slow');
                $('.card-body').css('transform', 'scale(1)')
                $('.info-div').each(function () {
                    if ($(this).attr('data-id') === cardDataId + 'a') {
                        let infoDiv = $(this);
                        infoDiv.addClass('fadeOut');
                        infoDiv.css('filter', 'grayscale(0)');
                        infoDiv.removeClass('animated fadeIn faster fadeOut');
                        infoDiv.hide();
                    }
                });

            }
        )
    };

    function applySwitchHover() {
        switchOption.mouseenter(function () {
            switchInfo.show();
            switchArrow.show();
            switchOption.css('cursor', 'pointer');
            switchOption.animate({ width: '75px' });
            switchH3.animate({ 
                left: '-45px',
                transform: 'scale(1.1)'
        });
            switchInfo.addClass('animated fadeIn');
            switchInfo.animate({ left: '30px' });
            switchArrow.addClass('animated fadeIn');
            switchArrow.animate({ left: '52px' });
        })
        switchOption.mouseleave(function () {
            switchInfo.animate({
                left: '25px',
                opacity: 0,
            }, 500, function () {
                switchInfo.css('left', '25px');
                switchInfo.hide();
            });
            switchArrow.animate({
                left: '42px',
                opacity: 0,
            }, 500, function () {
                switchArrow.css('left', '42px');
                switchArrow.hide();
            })
            switchOption.animate({ width: '60px' });
            switchH3.animate({
                left: '-52px',
                transform: 'scale(1)'
            });
            switchArrow.removeClass('animated fadeIn faster');
            switchInfo.removeClass('animated fadeIn faster');
        });
        // switchOption.hover(
        //     function () {
        //         switchOption.css('cursor', 'pointer');
        //         switchOption.animate({ width: '75px' });
        //         switchH3.animate({ left: '-45px' });
        //         // switchInfo.addClass('animated fadeIn faster');
        //         // switchInfo.show();
        //         // switchInfo.animate({ left: '30px' });
        //         // switchArrow.addClass('animated fadeIn faster');
        //         // switchArrow.show();
        //         // switchArrow.animate({ left: '52px' });
        //     },
        //     function () {
        //         switchArrow.hide();
        //         switchArrow.removeClass('animated fadeOut');
        //         switchInfo.removeClass('animated');
        //         resetSwitch();
        //         // switchOption.animate({ width: '60px' });
        //         // switchH3.animate({ left: '-52px' });
        //         // switchArrow.animate({ left: '42px' });
        //         // switchInfo.animate({
        //         //     left: '25px',
        //         //     opacity: 0,
        //         //     // fadeOut()
        //         // }, 500, function () {
        //         //     switchInfo.css('left', '25px')
        //         // });
        //         applySwitchHover();
        //         // switchInfo.fadeOut();
        //         // switchOption.css('width', '60px');
        //         // switchH3.css('left', '-52px');
        //     }
        // );
        // resetSwitch();
        // applySwitchHover();
    };

    function resetSwitch() {
        switchOption.animate({ width: '60px' });
        switchH3.animate({ left: '-52px' });
        switchArrow.animate({ left: '42px' });
    }

    card.on('click', function () {
        let thisCard = $(this);
        let cardDataId = $(this).attr('data-id');

        function checkCards(currentCard) {
            let stop = false;
            card.each(function () {
                if ($(this).hasClass('card-active')) {
                    return stop = true;
                }
                else {
                    $(this).addClass('card-inactive');
                    $(this).unbind("mouseenter mouseleave");

                }
            })
            if (stop === false) {
                cardClicked(currentCard);
            }
        }

        function cardClicked(currentCard) {
            currentCard.unbind("mouseenter mouseleave");
            currentCard.addClass('card-active');
            currentCard.removeClass('animated card-inactive bounce infinite slow');
            card.css('cursor', 'default');
            $('.card-body').css('transform', 'scale(1)')
            $('.info-div').each(function () {
                if ($(this).attr('data-id') === cardDataId + 'a') {
                    let infoDiv = $(this);
                    infoDiv.children('.exit-btn').show();
                    infoDiv.removeClass('fadeIn faster fadeOut');
                    infoDiv.css('filter', 'grayscale(0)');
                    infoDiv.addClass('div-active bounceInUp ');
                }
            })

        };

        checkCards(thisCard);
    })


    exitBtn.on('click', function () {
        $('.p-div').show();
        let exitBtnDataId = $(this).attr('data-id');
        card.removeClass('card-active card-inactive');
        // card.removeClass('card-inactive');
        applyCardHover();
        $('.info-div').each(function () {
            if ($(this).attr('data-id') === exitBtnDataId + 'a') {
                let infoDiv = $(this);
                infoDiv.addClass('fadeOut');
                infoDiv.hide();
                infoDiv.removeClass('animated fadeOut div-active flipInX');
            }
        })
    });

    function landingPageStart() {
        backgroundHalf.addClass('animated slideInRight');
        // backgroundHalf.animate().show();
        backgroundHalf.show();
        backgroundHalf.on('animationend', function () {
            introDiv.css('visibility', 'visible');
            introDiv.addClass('animated slideInLeft');
            introDiv.on('animationend', function () {
                introNextBtn.css('visibility', 'visible');
                introNextBtn.addClass('animated bounceInUp');
                introNextBtn.on('animationend', function () {
                    introNextBtn.removeClass('bounceInUp');
                    introNextBtn.addClass('infinite bounce slow');
                })
            })

        })
    };

});