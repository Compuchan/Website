function submitToAPI(e) {
    e.preventDefault();

    const URL = "https://kg0114k1ek.execute-api.us-east-1.amazonaws.com/beta/contact-us";

    const name = document.querySelector("#name-input").value;
    const empresa = document.querySelector("#enterp-input").value;
    const phone = document.querySelector("#phone-input").value;
    const email = document.querySelector("#email-input").value;
    const desc = document.querySelector("#description-input").value;


    /// VALIDA CAMPO NOMBRE
    let Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test(name)) {
        alert ("El nombre debe ser de 2 o mas caracteres");
        return
    }
    /// VALIDA CAMPO EMPRESA
    let Enterprise = /[A-Za-z]{1}[A-Za-z]/;
    if (!Enterprise.test(empresa)) {
        alert ("La empresa debe ser de 2 o mas caracteres");
       return
    }
    /// VALIDA CAMPO TELEFONO
    let mobilere = /[0-9]{8}/;
    if (!mobilere.test(phone)) {
        alert ("Ingrese un numero telefonico valido");
       return
    }
    /// VALIDA CAMPO EMAIL
        let reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test(email) || email == "") {
            alert ("Ingrese una direccion de correo valida");
            return
        }
    
    
    if(Namere.test(name),Enterprise.test(Enterprise),mobilere.test(phone),reeamil.test(email) == true && email != true) {

	grecaptcha.ready(function() {
		grecaptcha.execute('6Le4_uIZAAAAAFyxKQdbRq-s-KZbY69JdptF0dNw', {action: 'contactForm'}).then(function(token) {
			let data = {
				name : name,
				empresa: empresa,
				phone : phone,
				email : email,
				desc : desc,
				token: token
			};
			console.log("Data: ", data)
	
			fetch(URL, {
				method: 'POST', // or 'PUT'
				mode: 'no-cors',
				body: JSON.stringify(data), // data can be `string` or {object}!
				headers:{
				'Content-Type': 'application/json',
				'Accept': '*/*'
				}
			})
			.catch(error => console.error('Error:', error))
			.then(response => {
				console.log('Success:', response)
				document.getElementById("contact-form").reset();
				alert("Su consulta fue enviada, pronto nos pondremos en contacto");
			});
		});
	});
		
  }
}