console.log("tes");

$(window).scroll(function() {
    if ($(window).scrollTop() >= 70) {
        $(".header-nav").addClass("header-nav-scroll");
    } else {
        $(".header-nav").removeClass("header-nav-scroll");
    }

});


$(document).ready(function() {
    $(".toggle-menu").click(function(e) {
        e.preventDefault();

        $(".dropdown-content").toggleClass("dropdown-content-show");
    });
});