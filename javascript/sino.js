var timer = 0;
var to = null;
function sino(content, attr, time) {
    (time == null) ? timer = 5000 : timer = time;
    if ($('.sino, .sinoext').is(":visible")) {
        console.log("there is already one sino existing");
    } else {
        $('.sino, .sinoext').remove();
        $('body').append("<div class='sino " + attr + "'><div class='content'>"+ content + "</div><div class='control'> x</div></div>");
        $('.sino').slideToggle();
    }
        $('.control').click(function () {
            clearTimeout(to);
            $(".sino").fadeOut("slow");
        });
        if ($('.sino').hasClass("timed")) {
          var to = setTimeout(function () {
                $('.sino').fadeOut('slow');
            }, time);
        }
}
function sinoext(header, content, choice1, choice2, attr){
    if ($('.sino, .sinoext').is(":visible")) {
        console.log("there is already one sino existing");
    } else {
        $('.sino, .sinoext').remove();
        $('body').append('<div class="sinoext '+attr+'"><div class="header"><div class="header_text">'+header+'</div></div>' +
        '<div class="content">'+content+'</div><div class="footer"><div class="left">'+choice1+'</div>' +
        '<div class="right">'+choice2+'</div></div></div>');
        $('.sinoext').slideToggle();
    }
    $('.footer').click(function () {
        $(".sinoext").fadeOut("slow");
    });
}