let nombre = prompt("Escribi tu nombre")
let consulta = prompt("Hola " + nombre + " cual es el tratamiento de tu interes?" + "\n" + "\n1-Ortodoncia\n2-Estetica dental\n3-Extracciones")

switch (consulta) {
    case "1":
        let turno = prompt("El valor de este tratamiento es de 50.000$." + "\nDesea pedir un turno?" + "\n1- Si" + "\n2-No");
        if (turno == "1" || turno == "si") {
            prompt("Para turnos comuniquese al 0800-100-555 o deje su numero de celular y nos comunicaremos con usted.")
    
    
        } else {
            alert("Muchas gracias por su consulta.")
        }

break;

    case "2":
let turno1 = prompt("El valor de este tratamiento es de 15.000$." + "\nDesea pedir un turno?" + "\n1- Si" + "\n2-No");
if (turno1 == "1" || turno1 == "si") {
    prompt("Para turnos comuniquese al 0800-100-555 o deje su numero de celular y nos comunicaremos con usted.")
} else {
    alert("Muchas gracias por su consulta.")
}

break;

    case "3":
let turno2 = prompt("El valor de este tratamiento es de 5.000$ ." + "\nDesea pedir un turno?" + "\n1- Si" + "\n2-No");
if (turno2 == "1" || turno2 == "si") {
    prompt("Para turnos comuniquese al 0800-100-555 o deje su numero de celular y nos comunicaremos con usted.")
} else {
    alert("Muchas gracias por su consulta.")
}
break;

    default:
console.log("Opción no válida");
break;
}