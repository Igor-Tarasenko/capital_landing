$(document).ready(function () {
    $(".show-text-js").click(function () {
        if ($(this).find('span').hasClass('hover')) {
            $(this).find('span').removeClass('hover');
        } else {
            $(this).find('span').addClass('hover');
        }
        $(this).parent().find('.hidden-text').slideToggle(function () {
        });
    })
});