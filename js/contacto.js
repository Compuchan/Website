function regexValidator(e) {

const name = document.querySelector("#name-input").value;
const enterprise = document.querySelector("#enterp-input").value;
const tel = document.querySelector("#phone-input").value;
const email = document.querySelector("#email-input").value;
const message = document.querySelector("#description-input").value;

// Mensajes de error
const nameMsg = document.querySelector(".error-name");
const enterpriseMsg = document.querySelector(".error-empresa");
const telMsg = document.querySelector(".error-tel");
const emailMsg = document.querySelector(".error-email");

// RegEx
const regName = /[A-Za-z]{1}[A-Za-z]/;
const regEnterprise = /[A-Za-z]{1}[A-Za-z]/;
const regTel = /[0-9]{8}/;
const regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;


// Validacion RegExp


	if (regName.test(name) == false) {

		nameMsg.classList.add("error-msg");
	}

	if (regEnterprise.test(enterprise) == false) {

		enterpriseMsg.classList.add("error-msg");
	}

	if (regTel.test(tel) == false) {

		telMsg.classList.add("error-msg");
	}

	if (regEmail.test(email) == false || email == "") {

		emailMsg.classList.add("error-msg");
	}
}














function submitToAPI(e) {

	e.preventDefault();

	//const URL = "https://kg0114k1ek.execute-api.us-east-1.amazonaws.com/beta/contact-us";


	let data = {
		Nombre: name,
		Empresa: enterprise,
		Telefono: tel,
		Email: email,
		Mensaje: message
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
