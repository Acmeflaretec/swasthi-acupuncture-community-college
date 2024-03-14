




const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyJNecJeQwj0fuE1J8f8SYAl6dBm4RTXmSbp30-ukfW6uZoP5A6rvp96RdYMyk-sj4ZpA/exec'
const form2 = document.forms['registrationForm2']
const registerButton2 = document.getElementById('registerButton');
const loader2 = document.getElementById('loader');

form2.addEventListener('submit', e => {
	e.preventDefault();
	loader2.style.display = 'block'; // Show loading spinner
	registerButton2.disabled = true; // Disable the button while waiting for response

	fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
		.then(response => {
			loader2.style.display = 'none'; // Hide loading spinner
			registerButton2.disabled = false; // Re-enable the button
			if (response.ok) {
				console.log('Success!', response);
				// Optionally, you can reset the form after successful submission
				var closeButton = document.querySelector('.modal .modal-header .close');
					closeButton.click();
				form2.reset();
				setTimeout(() => {
					showAlert("Success! We will connect with you soon.")
				},2000);
			

			} else {
				console.error('Error!', response.statusText);
				showAlert('please try again ')
				loader.style.display = 'none'; // Hide loading spinner in case of error
				registerButton.disabled = false; // Re-enable the button
				// You might want to provide user feedback here
			}
		})
		.catch(error => {
			console.error('Error!', error.message);
			// You might want to provide user feedback here
		});
});


	
	function showAlert(a) {
    alert(a);
}