/*let nombre = prompt("Escribe tu nombre");
let consulta;

do {
    consulta = prompt("Hola " + nombre + ", ¿cuál es el tratamiento de tu interés?\n\n1- Ortodoncia\n2- Estética dental\n3- Extracciones\n4- Consulta");

    switch (consulta) {
        case "1":
            let turno = prompt("El valor de este tratamiento es de $50.000.\n¿Deseas pedir un turno?\n1- Sí\n2- No");
            if (turno === "1" || turno.toLowerCase() === "si") {
                prompt("Para turnos telefonicos, comuníquese al 0800-100-555 o deje su número de celular y nos comunicaremos con usted.");
            }
            alert("Muchas gracias, " + nombre + ", por su consulta.");
            break;

        case "2":
            let turno1 = prompt("El valor de este tratamiento es de $15.000.\n¿Deseas pedir un turno?\n1- Sí\n2- No");
            if (turno1 === "1" || turno1.toLowerCase() === "si") {
                prompt("Para turnos telefonicos, comuníquese al 0800-100-555 o deje su número de celular y nos comunicaremos con usted.");
            }
            alert("Muchas gracias, " + nombre + ", por su consulta.");
            break;

        case "3":
            let turno2 = prompt("El valor de este tratamiento es de $5.000.\n¿Deseas pedir un turno?\n1- Sí\n2- No");
            if (turno2 === "1" || turno2.toLowerCase() === "si") {
                prompt("Para turnos telefonicos, comuníquese al 0800-100-555 o deje su número de celular y nos comunicaremos con usted.");
            }
            alert("Muchas gracias, " + nombre + ", por su consulta.");
            break;

            case "4":
                let turno3 = prompt("El valor de la consulta es de $2.000.\n¿Deseas pedir un turno?\n1- Sí\n2- No");
                if (turno3 === "1" || turno3.toLowerCase() === "si") {
                    prompt("Para turnos telefonicos, comuníquese al 0800-100-555 o deje su número de celular y nos comunicaremos con usted.");
                }
                alert("Muchas gracias, " + nombre + ", por su consulta.");
                break;
        default:
            alert("Opción no válida, por favor, inténtalo nuevamente.");
            break;
    }
} while (consulta !== "1" && consulta !== "2" && consulta !== "3" && consulta != "4");*/

const turnosPacientes = {
    nombreCompleto: "",
    obraSocial: "",
    tramamiento: "",
    dia: "",
    hora: "",

}

const horariosDisponibles = {
    1: ["11hs", "13:30hs", "14hs", "16hs"],
    2: ["9hs", "10:30hs", "12hs", "15hs", "15:30hs"],
    3: ["9hs", "10hs", "10:30hs", "16hs", "16:30hs", "17hs", "18hs"],
    4: ["9:30hs", "11hs", "11:30hs", "13hs", "14:30hs", "15hs", "16hs"]
};

const opcionesTratamiento = {
    1: "Ortodoncia",
    2: "Estética dental",
    3: "Extracciones",
    4: "Consulta"
};

const opcionesDia = {
    1: "23 de mayo",
    2: "24 de mayo",
    3: "25 de mayo",
    4: "26 de mayo"
};

document.getElementById("btnPedirTurno").addEventListener("click", function () {
    let turno1 = pedirTurno();
    console.log(turno1);
})

function pedirTurno() {
    let nombreCompleto = prompt("Nombre y apellido");
    let obraSocial = prompt("Indique su obra social o si es particular.");
    let tratamiento = prompt("1- Ortodoncia\n2- Estética dental\n3- Extracciones\n4- Consulta ");
    let dia = prompt("Días disponibles de esta semana\n1- 23 de mayo\n2- 24 de mayo\n3- 25 de mayo\n4- 26 de mayo");
    let hora = "";
    if (dia in horariosDisponibles) {
        hora = prompt(`Horarios disponibles para la fecha ${opcionesDia[dia]}\n${horariosDisponibles[dia].join("\n")}`);
    } else {
        alert("Dia no válido, por favor, intentalo nuevamente.")
    }

    return {
        nombreCompleto,
        obraSocial,
        tratamiento: opcionesTratamiento[tratamiento],
        dia: opcionesDia[dia],
        hora
    };
}


document.getElementById("tratamientos").addEventListener("change", function () {
    let selectedTratamiento = this.value;

    switch (selectedTratamiento) {
        case "opcionConsulta":
            mostrarCosto("costoConsulta");
            break;

        case "opcionEstetica":
            mostrarCosto("costoEstetica");
            break;

        case "opcionExtraccion":
            mostrarCosto("costoExtraccion");
            break;

        case "opcionOrtodoncia":
            mostrarCosto("costoOrtodoncia");
            break;

        default:
            break;
    }
});

function mostrarCosto(costoId) {
    let costos = document.getElementsByClassName("texto-tratamiento");
    for (let i = 0; i < costos.length; i++) {
        costos[i].style.display = "none";
    }

    let costo = document.getElementById(costoId);
    costo.style.display = "block";
}
