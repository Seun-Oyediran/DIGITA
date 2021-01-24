



$("#sidemenu_toggle").on("click", function () {
    $(".site-nav").toggleClass("nav-active");
}),$(".site-nav li a").on("click", function () {
    $(".site-nav").removeClass("active");
});
