var $win = $(window);
$win.on("scroll", function () {
  var top = $win.scrollTop();
  var w = window.screen.width;

  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "index.html") {
    if (w < 500) {
      if (top > 300) {
        document.getElementById("nav-bar").style.backgroundColor =
          "rgba(8, 8, 8, 0.9)";
      } else if (top < 300) {
        document.getElementById("nav-bar").style.backgroundColor =
          "transparent";
      }
    } else {
      if (top > 699) {
        document.getElementById("nav-bar").style.backgroundColor =
          "rgba(8, 8, 8, 0.9)";
      } else if (top < 699) {
        document.getElementById("nav-bar").style.backgroundColor =
          "transparent";
      }
    }
  } else {
    if (top > 699) {
      document.getElementById("nav-bar-nofix").style.backgroundColor =
        "rgba(8, 8, 8, 0.9)";
    } else if (top < 699) {
      document.getElementById("nav-bar-nofix").style.backgroundColor =
        "transparent";
    }
  }
});

$(document).ready(function () {
  $("#about").on("click", function () {
    window.scrollTo(0, 760);
  });

  $("#backtotop").on("click", function () {
    window.scrollTo(0, 0);
  });
});
