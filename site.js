//Animate
$('#view-data').on('click', function() {
    const images = $('#data').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        }, 900
    );
})