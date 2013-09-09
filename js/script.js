$(document).foundation();

function handleSlider(event, slider) {
    $('#window').css('width', slider.value + 'px');
    $("#label").text(slider.value + 'px');
}

$(document).ready(function () {

    var windowFrame = $('#window');

    $('.right ul li').click(function () {

        var site = $('#urlholder').val();
        var res = $(this).attr('data-resolution');

        NProgress.start();
        windowFrame.attr('src', site);

        $('#slider').slider({
            value: res
        });
        windowFrame.css('width', res);
    });

    $('#window, #slider').hide();

    windowFrame.load(function () {
        NProgress.done();
        $('#window, #slider').fadeIn();
    });

    $('#slider').slider({
        value: 1024,
        min: 320,
        max: 1980,
        slide: handleSlider
    });

    $('#go').click(function () {
        var site = $('#urlholder').val();
        NProgress.start();
        windowFrame.attr('src', site);
    });

});