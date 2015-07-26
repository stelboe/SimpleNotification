var timer = 0;
function sino(content, attr, time) {
    (time == null) ? timer = 5000 : timer = time;
    if ($('.sino').is(":visible")) {
        console.log("there is already one sino existing");
    } else {
        $('.sino').remove();
        $('body').append("<div class='sino " + attr + "'><div class='content'>" + content + "</div> <div class='control'> x</div></div>");
        $('.sino').slideToggle();
    }
    $('.control').click(function () {
        console.log("click");
        $(".sino").fadeOut("slow");
    });
    if ($('.sino').hasClass("timed")) {
        setTimeout(function () {
            $('.sino').fadeOut('slow');
        }, time);
    }
}