window.onload = function() {
    $(".sub").hide();

    $(".menu > li").hover(function() {
        $(this).children("ul").stop().slideDown();
    }, function() {
        $(this).children("ul").stop().slideUp();
    });

    $(".Pimgs img").on("click", function() {
        $(".popup").show();
    });

    $(".exit").on("click", function() {
        $(".popup").hide();
    });
}