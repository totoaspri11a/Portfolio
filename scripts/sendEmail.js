emailjs.init("g817bYNQV0-CF341N"); 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el correo electrónico y extraer el dominio
    let email = document.getElementById('email').value;
    let emailDomain = email.split('@')[1];
    let serviceID;

    // Seleccionar el servicio en función del dominio
    if (emailDomain === 'gmail.com') {
        serviceID = 'service_fm1vxjm';  // ID de Gmail
    } else if (emailDomain === 'outlook.com' || emailDomain === 'hotmail.com') {
        serviceID = 'service_5gxi5ls';  // ID de Outlook
    } else {
        alert('El dominio del correo no es compatible con los servicios disponibles.');
        return; 
    }

    let emailParams = {
        from_name: document.getElementById('name').value,
        to_name: "Jonathan",
        user_email: email,
        reply_to: email,
        message: document.getElementById('message').value
    };

    // Enviar correo utilizando el servicio seleccionado
    emailjs.send(serviceID,"template_8phpcb8", emailParams)
        .then(
            function(response) {
                alert('El correo ha sido enviado exitosamente.');
            }, 
            function(error) {
                alert('Hubo un error al enviar el correo.');
        });
});