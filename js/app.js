

/* Menu nav toggle */

$("#nav-toggle").on("click", function(event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
});

$("#nav-close").on("click", function(event) {
    event.preventDefault();

    $("#main-nav").toggleClass("active");
    $("#nav-toggle").toggleClass("active");
});

/* Smooth scroll */
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#main-nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 500);
});