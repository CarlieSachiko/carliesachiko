(function($){

    $(document).ready(function() {

        /* ---------------------------------------------- /*
         * Contact form ajax
        /* ---------------------------------------------- */

        $('#contact-form').find('input,textarea').jqBootstrapValidation({
            preventSubmit: true,
            submitError: function($form, event, errors) {
                // additional error messages or events
            },
            submitSuccess: function($form, event) {
                event.preventDefault();

                var submit          = $('#contact-form #submit');
                var ajaxResponse    = $('#contact-response');

                var name            = $("input#name").val();
                var email           = $("input#email").val();
                var message         = $("textarea#message").val();
                var subject         = $("input#subject").val();

                $.ajax({
                    type: 'POST',
                    url: 'php/mailer.php',
                    dataType: 'json',
                    data: {
                        name: name,
                        email: email,
                        message: message,
                        subject: subject
                    },
                    cache: false,
                    beforeSend: function(result) {
                        // submit.empty();
                        // submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
                        $("input#name").val('');
                        $("input#email").val('');
                        $("textarea#message").val('');
                        $("input#subject").val('');
                    },
                    success: function(result) {
                        if(result.sendstatus == 1) {
                            ajaxResponse.html(result.message);
                            // $form.fadeOut(500);
                        } else {
                            ajaxResponse.html(result.message);
                        }
                    }
                });
            }
        });

    });

})(jQuery);
