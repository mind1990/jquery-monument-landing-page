document.addEventListener('DOMContentLoaded', function(){

	// $('.contact').on('submit', function (event) {
	// 	event.preventDefault();
	document.querySelector('.contact').on('submit', function (event) {
		event.preventDefault();
	

		$('form input, form textarea').each(function() {
			
			var $currentField = $(this);
			var fieldType = $(this).attr('type');

			if ( $currentField.val() === '' ) {
				$currentField.addClass('error');
				$currentField.siblings('.error-message').fadeIn();
				
				return;
			}

			// if (fieldType === 'email') {
			// 	for(var i = 0; i < email.length; i++) {
			// 		if (i === '@') {
			// 			return;
			// 		}
			// 	}
			// 	$crrentField.addClass('error');
			// 	$currentField.siblings('.error-message').text('Please enter a valid email adress.');
			// }

			if (fieldType === 'email') {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var isValidEmailAddress = re.test($currentField.val());
				if (!isValidEmailAddress) {
			    $currentField.addClass('error');
					$currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
					
					return;
			  }

			} 

			$currentField.removeClass('error');
			$currentField.siblings('.error-message').hide();

		});
	});
});