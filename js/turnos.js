document.addEventListener("DOMContentLoaded", function () {

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




    document.getElementById("inpuNombre").addEventListener("input", function () {
        localStorage.setItem("nombre", this.value);
    });

    document.getElementById("inputApellido").addEventListener("input", function () {
        localStorage.setItem("apellido", this.value);
    });

    document.getElementById("inpuObraSocial").addEventListener("input", function () {
        localStorage.setItem("obraSocial", this.value);
    });

    document.getElementById("inputTratamiento").addEventListener("change", function () {
        localStorage.setItem("Tratamiento", this.value);
    });

    document.getElementById("inputFecha").addEventListener("change", function () {
        let fecha = this.options[this.selectedIndex].text;
        localStorage.setItem("fecha", fecha);
    });


    let horarios = document.getElementsByClassName("horarios-turnos");
    for (let i = 0; i < horarios.length; i++) {
        horarios[i].addEventListener("change", function () {
            let hora = this.querySelector("select").value;
            localStorage.setItem("hora", hora);
        });
    }


    function mostrarInformacionGuardada() {
        const nombre = localStorage.getItem("nombre") || "N/A";
        const apellido = localStorage.getItem("apellido") || "N/A";
        const obraSocial = localStorage.getItem("obraSocial") || "N/A";
        const tratamiento = localStorage.getItem("Tratamiento") || "N/A";
        const fecha = localStorage.getItem("fecha") || "N/A";
        const hora = localStorage.getItem("hora") || "N/A";

        const mensaje =
            `<b>Nombre:</b> ${nombre}<br>` +
            `<b>Apellido:</b> ${apellido}<br>` +
            `<b>Obra Social / Particular:</b> ${obraSocial}<br>` +
            `<b>Tratamiento:</b> ${tratamiento}<br>` +
            `<b>Fecha:</b> ${fecha}<br>` +
            `<b>Hora:</b> ${hora}<br>`;

        Swal.fire({
            icon: "info",
            title: "Datos de tu turno",
            html: mensaje,
        });
    }


    document.getElementById("btnConfirmar").addEventListener("click", function (event) {
        event.preventDefault();
        mostrarInformacionGuardada();
    });


    function obtenerDatosLocalStorage() {
        fetchDatosLocalStorage()
            .then((datos) => {
                console.log(datos);
            })
            .catch((error) => {
                console.error("Error al obtener los datos del localStorage:", error);
            });
    }

    function fetchDatosLocalStorage() {
        return new Promise((resolve, reject) => {
            let nombre = localStorage.getItem("nombre");
            let apellido = localStorage.getItem("apellido");
            let obraSocial = localStorage.getItem("obraSocial");
            let tratamiento = localStorage.getItem("Tratamiento");
            let fecha = localStorage.getItem("fecha");
            let hora = localStorage.getItem("hora");

            let datos = {
                nombre,
                apellido,
                obraSocial,
                tratamiento,
                fecha,
                hora,
            };

            // Devuelve los datos del localStorage
            resolve(datos);
        });
    }

    obtenerDatosLocalStorage();
});


