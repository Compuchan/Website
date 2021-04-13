const formulario = document.getElementById('contact-form');
const inputs = document.querySelectorAll('#contact-form input');

// RegEx
const regex = {

	name = /[A-Za-z]{1}[A-Za-z]/,
	enterprise = /[A-Za-z]{1}[A-Za-z]/,
	email = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/,
	tel = /[0-9]{8}/
}


//Sumbmit

const SubmitButton = document.querySelector("#submit-btn")


// EventListeners

inputs.forEach((input) => {
	input.addEventListener('keyup', validForm)
	input.addEventListener('blur', validForm)
});


SubmitButton.addEventListener("click", checkSubmit);







const validForm = (e) => {
	switch (e.target.name){


	}

}


const validField = (expresion, input, field) => {
	if (expresion.test(input.value)) {
		
		document.querySelector(`${field}`).classList.remove()
	}

}



function checkSubmit() {



}


}




function submitToAPI() {

	//const URL = "https://kg0114k1ek.execute-api.us-east-1.amazonaws.com/beta/contact-us";


	let data = {
		Nombre: names.value,
		Empresa: enterprise.value,
		Email: email.value,
		Telefono: tel.value,
		Mensaje: message.value
	};

	console.log("Data: ", data)

	// fetch(URL, {
	// 	method: 'POST', // or 'PUT'
	// 	mode: 'no-cors',
	// 	body: JSON.stringify(data), // data can be `string` or {object}!
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		'Accept': '*/*'
	// 	}
	// })

	// 	.catch(error => console.error('Error:', error))
	// 	.then(response => {
	// 		console.log('Success:', response)
	// 		document.getElementById("contact-form").reset();
	// 		alert("Su consulta fue enviada, pronto nos pondremos en contacto");
	// 	});
}