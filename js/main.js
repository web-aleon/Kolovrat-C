'use strict';

$(document).ready(function () {
	$('.wbh_modal').click(function (event) {
		event.preventDefault();

		var data_text = event.target.getAttribute('data-text');
		var data_btext = event.target.getAttribute('data-btext');
		var data_from = event.target.getAttribute('data-from');

		$('#modal_title').text(data_text);
		$('#modal_button').text(data_btext);
		$('#modal_from').val(data_from);

		$('#overlay').fadeIn(400, function () {
			$('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
		});
	});

	$('#modal_close, #overlay').click(modalFormClose);

	function modalFormClose() {
		$('#modal_form').animate({ opacity: 0, top: '45%' }, 200, function () {
			$(this).css('display', 'none');
			$('#overlay').fadeOut(400);
		});
	}

	$("form").submit(function (event) {
		console.log('qwe');
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: $(this).serialize()
		}).done(function () {
			event.target.reset();
			modalFormClose();
			// modalThanks();
		});
		return false;
	});
});