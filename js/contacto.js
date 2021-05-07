const formulario = document.getElementById('contact-form');
const inputs = document.querySelectorAll('#contact-form input, textarea');
const loader = document.querySelector("#loading");

// RegEx
const regex = {

	regNombre: /[A-Za-z]{1}[A-Za-z]/,
	regEmpresa: /[A-Za-z]{1}[A-Za-z]/,
	regEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	regTelefono: /[0-9]{8}/,
	regMensaje: /^(.{2,})$/
}


const campos = {
	nombre: false,
	empresa: false,
	email: false,
	telefono: false,
	mensaje: false
}



const validForm = (e) => {
	switch (e.target.name){
		case "nombre":	
			validField(regex.regNombre, e.target, 'nombre')
		break
		case "empresa":	
			validField(regex.regEmpresa, e.target, 'empresa')
		break
		case "email":	
			validField(regex.regEmail, e.target, 'email')
		break
		case "telefono":	
			validField(regex.regTelefono, e.target, 'telefono')
		break
		case "mensaje":	
			validField(regex.regMensaje, e.target, 'mensaje')
		break
	}

}



const validField = (expresion, input, field) => {
	if (expresion.test(input.value)) {
		
		document.querySelector(`#grupo_${field} #${field}`).classList.remove("input-bad")
		document.querySelector(`#grupo_${field} #${field}`).classList.add("input-ok");
		document.querySelector(`#grupo_${field} label`).classList.remove("label-bad");
		document.querySelector(`#grupo_${field} label`).classList.add("label-ok");
		document.querySelector(`#grupo_${field} p`).classList.remove("error-msg-show");
		campos[field] = true;

}	else {
		document.querySelector(`#grupo_${field} #${field}`).classList.add("input-bad")
		document.querySelector(`#grupo_${field} #${field}`).classList.remove("input-ok")
		document.querySelector(`#grupo_${field} label`).classList.remove("label-ok")
		document.querySelector(`#grupo_${field} label`).classList.add("label-bad")
		document.querySelector(`#grupo_${field} p`).classList.add("error-msg-show")
	campos[field] = false;

	}
}


// EventListeners

inputs.forEach((input) => {
	input.addEventListener('keyup', validForm)
	input.addEventListener('blur', validForm)
});



formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (campos.nombre && campos.empresa && campos.email && campos.telefono && campos.mensaje) {

		submitToAPI()
		
}})


function submitToAPI() {

	loader.classList.add("display");

	grecaptcha.ready(function() {
		grecaptcha.execute('6Le4_uIZAAAAAFyxKQdbRq-s-KZbY69JdptF0dNw', {action: 'contactForm'}).then(function(token) {
			
	
	const URL = "https://kg0114k1ek.execute-api.us-east-1.amazonaws.com/beta/contact-us";
	

	let data = {
		name:   inputs[0].value,
		empresa:inputs[1].value,
		email:  inputs[2].value,
		phone:  inputs[3].value,
		desc:   inputs[4].value,
		token:  token
	};

	console.log("Data: ", data)

	fetch(URL, {
		method: 'POST', // or 'PUT'
		mode: 'no-cors',
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers: {
			'Content-Type': 'application/json',
			'Accept': '*/*'
		}
	})

		.catch(error => console.error('Error:', error))
		.then(response => {
			console.log('Success:', response)
			loader.classList.remove("display");

			document.getElementById('ok-message').classList.add('ok-message-show');
			setTimeout(() => {
				document.getElementById('ok-message').classList.remove('ok-message-show');
			}, 5000);
	
			document.querySelectorAll('label').forEach((label) => {
				label.classList.remove("label-ok")
			});
	
			inputs.forEach((input) => {
				input.classList.remove("input-ok")
			});

			formulario.reset()

		});
	});
});
}