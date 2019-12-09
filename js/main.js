$(function () {

    $('.menu ul a').hover(function () {
        $(this).find('img').attr('src', 'img/menu-slot-hovered.svg');
    }, function () {
        $(this).find('img').attr('src', 'img/menu-slot.svg');
    });

    var options = {
        horizontal: 1,
        itemNav: 'basic',
        activateMiddle: 1,
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 10,
        scrollBar: $('.scrollbar'),
        scrollBy: 1,
        activatePageOn: 'click',
        speed: 200,
        moveBy: 600,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1
    };

    var frameWidth = $('.frame').width();
        // liItems = $('.frame .slidee li').length,
        // liWidth = $('.frame .slidee li').width(),
        // ul = liItems * liWidth;
        // a = $('.frame .slidee').css('transform').match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\d+)/)[0];


    $('.slidee li').width(frameWidth.toFixed());

    // $(window).resize(function () {
    //     var frameWidth = $('.frame').width(),
    //         liItems = $('.frame .slidee li').length,
    //         liWidth = $('.frame .slidee li').width(),
    //         ul = liItems * liWidth;

    //     $('.slidee li').width(frameWidth.toFixed());
    //     $('.frame .slidee').width(ul.toFixed());
    // });

    $('.frame').sly(options);

    $("#my-mmenu").mmenu({
        "extensions": [
        "position-left",
        "fx-menu-slide",
        ]
    },{
        "language":"ru"
    });

});