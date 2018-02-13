'use strict';

$(document).ready(function() { 

	/* SLICK SLIDER */
	$('#testiSlider').slick({
	  asNavFor: '#textSlider',
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  infinite: true,
	  variableWidth: true,
	  focusOnSelect: true,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('#textSlider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '#testiSlider'
	});
	

	$('.wbh_modal').click( function(event){ 
		event.preventDefault();


		var data_text = event.currentTarget.getAttribute('data-text');
		var data_btext = event.currentTarget.getAttribute('data-btext');
		var data_from = event.currentTarget.getAttribute('data-from');

		$('#modal_title').text(data_text);
		$('#modal_button').text(data_btext);
		$('#modal_from').val(data_from);

		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	
	$('#modal_close, #overlay').click( modalFormClose );

	function modalFormClose() {
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400); 
				}
			);
	}

	$("form").submit(function(event){

        $.ajax({
            type: "POST",
            url: "../send.php",
            data: $(this).serialize()
        }).done(function(){
        	event.target.reset();
            modalFormClose();
            // modalThanks();
        });
        return false;
    });
});