// formulario.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    
    // Validar teléfono
    let telefono = document.getElementById('telefono').value;
    let telefonoPattern = /^\d+$/; // Solo números

    if (!telefonoPattern.test(telefono)) {
        document.getElementById('telefono').setCustomValidity("Formato de teléfono no válido. Use solo dígitos.");
        valid = false;
    } else {
        document.getElementById('telefono').setCustomValidity("");
    }

    // Validar servicios
    let servicios = document.getElementsByName('servicio');
    let servicioChecked = false;
    for (let servicio of servicios) {
        if (servicio.checked) {
            servicioChecked = true;
            break;
        }
    }

    if (!servicioChecked) {
        document.getElementById('servicioError').textContent = "Seleccione al menos un servicio.";
        valid = false;
    } else {
        document.getElementById('servicioError').textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
});
