
(function($) {
    'use strict';
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('d-none');
            $(formMessages).addClass('success');
            $('.badge').addClass('badge-success');

            // Set the message text.
            $('.badge').text('Your contact request has been submitted, Please wait for a while. One of our team member will contact you soon. Thanks');

            // Clear the form.
            $('#name, #email, #phone, #subject, #message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('d-none');
            $('.badge').addClass('badge-danger');

            // Set the message text.
            if (data.responseText !== '') {
                $('.badge').text(data.responseText);
            } else {
                $('.badge').text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

})(jQuery);