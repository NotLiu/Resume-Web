var $win = $(window);
$win.on('scroll', function () {
    var top = $win.scrollTop();

    if (top > 699) {
        document.getElementById("nav-bar").style.backgroundColor = 'rgba(8, 8, 8, 0.9)';
    }
    else if (top < 699) {
        document.getElementById("nav-bar").style.backgroundColor = 'transparent';
    }
});

$(document).ready(function () {
    $("#about").on("click", function () {
        window.scrollTo(0, 760)
    })
})