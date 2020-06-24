
window.addEventListener('load', function () {
    var w = window.screen.width;

    var page = window.location.href;
    var page_slice = page.slice(Math.max(page.length - 16, 1));
    console.log(page);
    console.log(page.slice(Math.max(page.length - 16, 1)));

    if (!page_slice.includes("projects.html") && !page_slice.includes("experiences.html")) {
        if (w < 450) {
            document.getElementById("nav-bar").style.fontSize = "medium";
            document.getElementById("aboutme").style.fontSize = "large";
            document.getElementById("image-banner").getElementsByTagName("img")[0].style.height = "initial";
            document.getElementById("image-banner").style.top = "initial";
        }
    }
    else if (page_slice.includes("projects.html")) {

        if (w < 450) {
            document.getElementById("nav-bar-nofix").style.fontSize = "medium";
            document.getElementById("projectblock").style.fontSize = "large";
        }
    }
    else {
        document.getElementById("nav-bar-nofix").style.fontSize = "medium";
        if (w < 450) {
            document.getElementById("experience-block").style.fontSize = "large";
            document.getElementById("experience-block").style.margin = "8% 17% 7%";
            document.getElementById("involvement-block").style.fontSize = "large";
            document.getElementById("involvement-block").style.margin = "4% 17%";

        }
    }

});

var $win = $(window);
$win.on('scroll', function () {
    var top = $win.scrollTop();
    var w = window.screen.width;

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (page == "index.html") {
        if (w < 450) {
            if (top > 300) {
                document.getElementById("nav-bar").style.backgroundColor = 'rgba(8, 8, 8, 0.9)';
            }
            else if (top < 300) {
                document.getElementById("nav-bar").style.backgroundColor = 'transparent';
            }
        }
        else {
            if (top > 699) {
                document.getElementById("nav-bar").style.backgroundColor = 'rgba(8, 8, 8, 0.9)';
            }
            else if (top < 699) {
                document.getElementById("nav-bar").style.backgroundColor = 'transparent';
            }
        }
    }
    else {
        if (top > 699) {
            document.getElementById("nav-bar-nofix").style.backgroundColor = 'rgba(8, 8, 8, 0.9)';
        }
        else if (top < 699) {
            document.getElementById("nav-bar-nofix").style.backgroundColor = 'transparent';
        }
    }
});

$(document).ready(function () {
    $("#about").on("click", function () {
        window.scrollTo(0, 760)
    })

    $("#backtotop").on("click", function () {
        window.scrollTo(0, 0);
    })
})


