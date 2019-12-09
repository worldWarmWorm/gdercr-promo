$(function () {

    $('.menu ul a').hover(function () {
        $(this).find('img').attr('src', 'img/menu-slot-hovered.svg');
    }, function () {
        $(this).find('img').attr('src', 'img/menu-slot.svg');
    });

    $("#my-mmenu").mmenu({
        "extensions": [
        "position-left",
        "fx-menu-slide",
        ]
    },{
        "language":"ru"
    });

});