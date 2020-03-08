$(document).ready(function () {
    // =====================NOT USING!!!=====================
    const triviaBtn = $('#trivia-btn');
    const triviaInfoDiv = $('#trivia-info-div');
    const triviaImg = $('#trivia-img');
    const cardCol = $(".card-col");
    const cardHover = $('.card-hover');
    // =======================================================

    // =====================USING!!!!!!!!=====================
    const navbar = $('.navbar');
    const linksDiv = $('.links-div');
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
    const halfMid = $('.half-mid');
    const imageSlide = $('.image-slide');
    const images = $('.image-div img')
    const ulSlide = $('.ul-slide');
    const ul = $('.ul-div ul')
    // ======================Variables=======================

    let counter = 1;
    let ulCounter = 1;
    let size;
    let ulSize;

    // ========================arrays=========================
    const aboutMeInfo = [
        {
            'info': [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur augue eget risus vulputate sodales. Sed sed felis a odio consectetur tincidunt ac in.',
                'Integer pharetra libero sed tortor fringilla sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.']
        },
        {
            'info': [
                'Maecenas enim nisi, ullamcorper vel convallis ut, lacinia ac nulla. Praesent non molestie justo. Morbi pellentesque ex et mollis volutpat. Aenean facilisis ante id ipsum bibendum dignissim. Praesent ac faucibus neque. Proin et turpis eros.',
            ]
        },
        {
            'info': [
                'Nullam mattis dapibus elit. Donec congue purus ac mauris facilisis placerat. Aliquam ut hendrerit turpis. Duis et faucibus sapien.',
            ]
        }
    ]

    // =======================================================
    applyCardHover();
    applySwitchHover();
    landingPageStart();

    let userPick = '';

    introNextBtn.on('click', function (event) {
        event.preventDefault();
        introSection.addClass('animated fast fadeOut');
        introSection.on('animationend', function () {
            introSection.hide();
            optionSection.addClass('animated slideInUp');
            optionSection.show();
            optionSection.on('animationend', function () {
                backgroundHalf.hide();
            })
        });
    });

    aboutBtn.on('click', function (event) {
        userPick = 'about';
        event.preventDefault()
        optionSection.css('background-color', '#efefef')
        portfolioOptionDiv.addClass('animated slideOutRight');
        aboutOptionDiv.addClass('animated fadeOutRight')
        portfolioOptionDiv.on('animationend', function () {
            optionSection.hide();
            setAboutPage();
            aboutSection.css('display', 'flex');
            createSlider();
        });
    });

    portfolioBtn.on('click', function (event) {
        event.preventDefault();
        userPick = 'portfolio';
        switchOption.show();
        $('body').css('background-image', 'none');
        $('body').css('background-color', '#212121');
        portfolioOptionDiv.addClass('animated fadeOut');
        halfMid.addClass('animated fadeOut');
        // aboutOptionDiv.addClass('animated fadeOutLeft');
        halfMid.on('animationend', function () {
            optionSection.animate({ width: 'hide' }, 750).delay(100).fadeOut(100, function () {
                portfolioSection.fadeIn('slow', function () {
                    setAboutPage();
                    switchH3.fadeIn();
                    $('.navbar').fadeIn();
                    linksDiv.fadeIn();
                });
            });


            // aboutOptionDiv.on('animationend', function () {
            //     aboutOptionDiv.removeClass('animated slideOutLeft');

            // optionSection.addClass('animated slow slideOutLeft');
            // optionSection.on('animationend', function () {
            //     optionSection.fadeOut();
            // })
            // aboutOptionDiv.hide();
            // optionSection.hide();



            //     optionSection.addClass('animated slideOutRight');
            // });
            // optionSection.hide();

        })
        // portfolioSection.show();
        // portfolioSection.addClass('animated fadeIn')
        // portfolioSection.on('animationend', function () {
        // optionSection.hide();
        // switchH3.addClass('animated fadeIn');
        // switchH3.show();
        // });

        // })
    });


    // Card effects

    function applyCardHover() {
        card.hover(
            function () {
                let cardDataId = $(this).attr('data-id');
                $('.p-div').hide();
                $(this).css('cursor', 'pointer');
                $(this).addClass('animated bounce');
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
                $(this).removeClass('animated bounce');
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
            switchH3.animate({ left: '-45px' });
            switchInfo.addClass('animated fadeIn');
            switchInfo.animate({ left: '30px' });
            switchArrow.addClass('animated fadeIn');
            switchArrow.animate({ left: '52px' });
        })
        switchOption.mouseleave(function () {
            switchInfo.animate({
                left: '25px',
                opacity: 0,
            }, 250, function () {
                switchInfo.css('left', '25px');
                switchInfo.hide();
            });
            switchArrow.animate({
                left: '42px',
                opacity: 0,
            }, 250, function () {
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
        backgroundHalf.show();
        introDiv.css('visibility', 'visible');
        introDiv.addClass('animated slideInLeft');
        introDiv.on('animationend', function () {
            introNextBtn.addClass('animated bounceInUp');
            introNextBtn.css('visibility', 'visible');
            introNextBtn.on('animationend', function () {
                introNextBtn.removeClass('bounceInUp');
                introNextBtn.addClass('infinite bounce slow');
            })
        })
    };

    function setAboutPage() {
        navbar.fadeIn();
        linksDiv.fadeIn()

        if (userPick === 'about') {
            // createList();
            // createSlider();
            navbar.css('padding', '2% 0%');
            $('.navbar-brand').css({
                'color': '#212121',
                'right': '50%'
            });
            // $('.navbar .btn').css('float', 'right')
            linksDiv.css({
                'left': '0',
                'border-left': 'none',
                'border-right': '1px #fff solid',
                'margin-right': '0',
                'padding': '12% 1%',

            });
            $('.links-div ul').css({
                'padding-left': '0',
                'padding-inline-start': '0',
            });
            // $('.links-div ul li a').css({
            //     'color': '#212121'
            // });
            $('.links-div ul li a').hover(
                function () {
                    $(this).css('color', '#428f66')
                },
                function () {
                    $(this).css('color', '#fff')
                }
            );

        }

        if (userPick === 'portfolio') {
            console.log('In Portfolio');
            linksDiv.css('right', '0');
        }
    }

    function createSlider() {
        size = imageSlide.innerWidth();
        ulSize = ulSlide.innerWidth();
        console.log(size);
        console.log(counter);

        imageSlide.css('transform', 'translateX(' + (-size * counter) + 'px)');
        ulSlide.css('transform', 'translateX(' + (-ulSize * counter) + 'px)');

        $('#sub-btn').on('click', function () {
            if (counter <= 0) return;
            imageSlide.css('transition', 'transform 0.4s ease-in-out');
            ulSlide.css('transition', 'transform 0.4s ease-in-out');
            counter--;
            ulCounter--;
            imageSlide.css('transform', `translateX(${-size * counter}px)`);
            ulSlide.css('transform', `translateX(${-ulSize * ulCounter}px)`);

        });

        $('#add-btn').on('click', function () {
            if (counter >= images.length - 1) return;
            imageSlide.css('transition', 'transform 0.4s ease-in-out');
            ulSlide.css('transition', 'transform 0.4s ease-in-out');
            counter++;
            ulCounter++;
            imageSlide.css('transform', `translateX(${-size * counter}px)`);
            ulSlide.css('transform', `translateX(${-ulSize * ulCounter}px)`);
        });

        imageSlide.on('transitionend', function () {
            if (images[counter].id === 'last-clone') {
                imageSlide.css('transition', 'none');
                counter = images.length - 2;
                imageSlide.css('transform', `translateX(${-size * counter}px)`);
            }
            else if (images[counter].id === 'first-clone') {
                imageSlide.css('transition', 'none');
                counter = images.length - counter;
                imageSlide.css('transform', `translateX(${-size * counter}px)`);
            }
        })

        ulSlide.on('transitionend', function () {
            if (ul[ulCounter].id === 'last-clone-ul') {
                ulSlide.css('transition', 'none');
                ulCounter = ul.length - 2;
                ulSlide.css('transform', `translateX(${-ulSize * ulCounter}px)`);
            }
            else if (ul[ulCounter].id === 'first-clone-ul') {
                ulSlide.css('transition', 'none');
                ulCounter = ul.length - ulCounter;
                ulSlide.css('transform', `translateX(${-ulSize * ulCounter}px)`);
            }
        })
    }

});