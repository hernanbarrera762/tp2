function validarFormulario() {
    const nombre = document.getElementById("Nombre").value.trim();
    const apellido = document.getElementById("Apellido").value.trim();
    const edad = parseInt(document.getElementById("Edad").value);
    const altura = parseFloat(document.getElementById("Altura").value);
    const email = document.getElementById("Email").value.trim();
    const mensaje = document.getElementById("Resultado");

    let errores = [];

    if (!nombre || nombre.length > 50) {
        errores.push("El nombre no puede estar vacío y debe ser de un máximo de 50 caracteres.");
    }
    if (!apellido || apellido.length > 50) {
        errores.push("El apellido no puede estar vacío y debe ser de un máximo de 50 caracteres.");
    }
    if (isNaN(edad) || edad < 0) {
        errores.push("La edad no debe ser negativa.");
    } else if (edad < 18) {
        errores.push("La edad no puede ser menor de 18 años.");
    }
    if (isNaN(altura) || altura < 0 || altura > 230) {
        errores.push("La altura no puede ser negativa y no puede ser mayor a 230 cm.");
    }
    if (!email.includes('@')) {
        errores.push("El correo electrónico debe incluir el '@'.");
    }

    if (errores.length > 0) {
        mensaje.innerText = errores.join(" ");
        mensaje.className = 'result error';
    } else {
        mensaje.innerText = "Todas las validaciones son correctas.";
        mensaje.className = 'result success';
    }
}
