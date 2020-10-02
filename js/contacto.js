//Inputs
const names = document.querySelector("#name-input");
const enterprise = document.querySelector("#enterp-input");
const email = document.querySelector("#email-input");
const tel = document.querySelector("#phone-input");
const message = document.querySelector("#description-input");

//labels
const labelNames = document.querySelector("#label-name");
const labelEnterprise = document.querySelector("#label-enterprise");
const labelEmail = document.querySelector("#label-email");
const labelTel = document.querySelector("#label-tel");
const labelMessage = document.querySelector("#label-message");

//Sumbmit
const SubmitButton = document.querySelector("#submit-btn")

// Error messages form
const nameMsg = document.querySelector("#error-name");
const enterpriseMsg = document.querySelector("#error-empresa");
const emailMsg = document.querySelector("#error-email");
const telMsg = document.querySelector("#error-tel");
const messageMsg = document.querySelector("#error-message");

// RegEx
const regexName = /[A-Za-z]{1}[A-Za-z]/;
const regexEnterprise = /[A-Za-z]{1}[A-Za-z]/;
const regexEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
const regexTel = /[0-9]{8}/;




// EventListeners
names.addEventListener("change", validOnWrite);
enterprise.addEventListener("change", validOnWrite);
email.addEventListener("change", validOnWrite);
tel.addEventListener("change", validOnWrite);
message.addEventListener("change", validOnWrite);

SubmitButton.addEventListener("click", checkSubmit);





let inputList = [names, enterprise, email, tel, message];

inputList.forEach(element => {
	element.classList.add("error-msg")
});
	







function validOnWrite() {

	if (regexName.test(names.value) == false && names.value != "") {

		nameMsg.classList.add("error-msg");
	} else {

		nameMsg.classList.remove("error-msg" );
	}

	if (regexEnterprise.test(enterprise.value) == false && enterprise.value != "") {

		enterpriseMsg.classList.add("error-msg");
	} else {

		enterpriseMsg.classList.remove("error-msg");
	}
	
	if (regexEmail.test(email.value) == false && email.value != "") {

		emailMsg.classList.add("error-msg");
	} else {

		emailMsg.classList.remove("error-msg");
	}

	if (regexTel.test(tel.value) == false && tel.value != "") {

		telMsg.classList.add("error-msg");
	} else {

		telMsg.classList.remove("error-msg");
	}
	
	if ( message.value != "") {

		messageMsg.classList.remove("error-msg");
	}
	
}


function checkSubmit() {

	if (!regexName.test(names.value) || names.value == "" ||
		!regexEnterprise.test(enterprise.value) || enterprise.value == "" ||
		!regexEmail.test(email.value) || email.value == "" ||
		!regexTel.test(tel.value) || tel.value == "" ||
		message.value == "") {

		validOnSubmit();

	} else {

		submitToAPI();

	}

}


function validOnSubmit() {

	if (regexName.test(names.value) == false || names.value == "") {

		nameMsg.classList.add("error-msg");
	} 

	if (regexEnterprise.test(enterprise.value) == false || enterprise.value == "") {

		enterpriseMsg.classList.add("error-msg");
	}
	
	if (regexEmail.test(email.value) == false || email.value == "") {

		emailMsg.classList.add("error-msg");
	}

	if (regexTel.test(tel.value) == false || tel.value == "") {

		telMsg.classList.add("error-msg");
	}

	if ( message.value == "") {

		messageMsg.classList.add("error-msg");
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