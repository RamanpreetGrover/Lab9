$(document).ready(function() {
    $('.filter-button').on('click', function() {
        var category = $(this).data('category');
        $('.image').hide();
        $('[data-category="' + category + '"]').show();
    });

    $('.image').on('click', function() {
        var imageUrl = $(this).find('img').attr('src');
        $('#lightbox').html('<img src="' + imageUrl + '">').fadeIn();
    });

    $('#lightbox').on('click', function() {
        $(this).fadeOut();
    });
    // Show all images when the "Show All" button is clicked
    $('#show-all').click(function() {
        $('#gallery .image').show();
        $('#filters button').removeClass('active');
        $(this).addClass('active');
    });
});