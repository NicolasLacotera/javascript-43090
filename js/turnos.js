document.getElementById("inputFecha").addEventListener("change", function () {
    let selectFecha = this.value;

    switch (selectFecha) {
        case "fecha1":
            mostrarHorarios("horarios-container1");
            break;

        case "fecha2":
            mostrarHorarios("horarios-container2");
            break;

        case "fecha5":
            mostrarHorarios("horarios-container5");
            break;

        case "fecha6":
            mostrarHorarios("horarios-container6");
            break;

        case "fecha7":
            mostrarHorarios("horarios-container7");
            break;

        case "fecha8":
            mostrarHorarios("horarios-container8");
            break;

        default:
            break;
    }
});

function mostrarHorarios(horariosId) {
    let horarios = document.getElementsByClassName("horarios-turnos");
    for (let i = 0; i < horarios.length; i++) {
        horarios[i].style.display = "none";
    }
    let horario = document.getElementById(horariosId);
    horario.style.display = "block";
}


document.getElementById("inpuNombre").addEventListener("input", function() {
    localStorage.setItem("nombre", this.value);
});

document.getElementById("inputApellido").addEventListener("input", function() {
    localStorage.setItem("apellido", this.value);
});

document.getElementById("inpuObraSocial").addEventListener("input", function() {
    localStorage.setItem("obraSocial", this.value);
});
