
$(document).ready(function () {
    $('.nav__burger').click(function() {
        $('.nav__list_header').toggleClass('active');
        $('.nav__burger').toggleClass('active');
    })

    $('.js-message__box').owlCarousel({
        loop: true,
        autoHeight: true,
        nav: true,
        items: 1,
        responsive: {
            0 : {
                stagePadding: 5,
                margin: 15
            },

            768 : {
                stagePadding: 5,
                margin: 15
            },

            1024 : {
                stagePadding: 5,
                margin: 15
            }
        }
    });

    $('.form__btn').click(function(e) {
        e.preventDefault();
        $('.form').find('.form__field').each(function () {
            if ($(this).val() != '') {
                $(this).removeClass('form__field_empty');
            } else {
                $(this).addClass('form__field_empty');
            }
        });

        if(!$('.form__field').hasClass('form__field_empty')) {
            $('.form__field').val('');
        }
    })

    $('.footer__modal-item').click(function() {
        var $index = $(this).index();
        $('.footer-modal').removeClass('active');
        $('.footer-modal').eq($index).addClass('active');
        $('body, html').addClass('overflow');
    })

    $('.footer-modal__close').click(function() {
        $('.footer-modal').removeClass('active');
        $('body, html').removeClass('overflow');
    })

    $(document).mouseup(function(e) {
		var div = $('.footer-modal__body');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.footer-modal').removeClass('active');
            $('body, html').removeClass('overflow');
		}
	});
});