function submitToAPI(e) {
    e.preventDefault();
    const URL = "https://kg0114k1ek.execute-api.us-east-1.amazonaws.com/beta/contact-us";
    const destinatario = "heroofwink" 
    /// VALIDA CAMPO NOMBRE
    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert ("El nombre debe ser de 2 o mas caracteres");
        return;
    }
    /// VALIDA CAMPO EMPRESA
    var Enterprise = /[A-Za-z]{1}[A-Za-z]/;
    if (!Enterprise.test($("#enterp-input").val())) {
        alert ("La empresa debe ser de 2 o mas caracteres");
        return;
    }
    /// VALIDA CAMPO TELEFONO
    var mobilere = /[0-9]{8}/;
    if (!mobilere.test($("#phone-input").val())) {
        alert ("Ingrese un numero telefonico valido");
        return;
    }
    /// VALIDA CAMPO EMAIL
    if ($("#email-input").val()=="") {
        alert ("Ingrese una direccion de correo");
        return;
    }   else{
        var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if (!reeamil.test($("#email-input").val())) {
            alert ("Ingrese una direccion de correo valida");
            return;
        }
    }

    var name = $("#name-input").val();
    var empresa = $("#enterp-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        receiver: destinatario,
        name : name,
        empresa: empresa,
        phone : phone,
        email : email,
        desc : desc
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
  }