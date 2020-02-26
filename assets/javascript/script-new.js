$(document).ready(function () {
    const introSection = $('#intro-section');
    const optionSection = $('#option-section');
    const navbar = $('#navbar');
    const aboutBtn = $('.about-btn');
    const portfolioBtn = $('.port-btn');
    const aboutOptionDiv = $('#about-option');
    const portfolioOptionDiv = $('#portfolio-option');
    const aboutSection = $('#about-section');
    const portfolioSection = $('#portfolio-section');
    const card = $('.card');
    const backgroundHalf = $('.background-half');
    const introDiv = $('.intro-div')
    const introNextBtn = $('#intro-next');
    const iconLinkDiv = $('.icon-link-div');
    const triviaBtn = $('#trivia-btn');
    const triviaInfoDiv = $('#trivia-info-div');
    const triviaImg = $('#trivia-img');
    const cardCol = $(".card-col");
    const cardHover = $('.card-hover');
    const exitBtn = $('.exit-btn');

    portfolioSection.hide();
    backgroundHalf.hide();
    optionSection.hide();
    landingPageStart();
    applyHover();

    introNextBtn.on('click', function (event) {
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
        $('body').css('background-image', 'none');
        $('body').css('background-color', '#083d77');
        aboutOptionDiv.addClass('animated slideOutLeft');
        portfolioOptionDiv.addClass('animated fadeOutLeft');
        aboutOptionDiv.on('animationend', function () {
            optionSection.hide();
            portfolioSection.show();
            portfolioSection.addClass('animated fadeInRight')
        });
    })


    // Card effects

    function applyHover() {
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
        applyHover();
        $('.info-div').each(function () {
            if ($(this).attr('data-id') === exitBtnDataId + 'a') {
                let infoDiv = $(this);
                infoDiv.addClass('fadeOut');
                infoDiv.hide();
                infoDiv.removeClass('animated fadeOut div-active flipInX');
            }
        })
    })

    function landingPageStart() {
        backgroundHalf.show();
        backgroundHalf.addClass('animated slideInRight');
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
    }

});