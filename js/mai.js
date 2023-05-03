let nombre = prompt("Escribi tu nombre")
let consulta = prompt("Hola " + nombre + " cual es el tratamiento de tu interes?" + "\n" + "\n1-Ortodoncia\n2-Estetica dental\n3-Extracciones")

switch (consulta) {
    case "1":
        let turno = prompt("El valor de este tratamiento es de 50.000$." + "\nDesea pedir un turno?" + "\n1- Si" + "\n2-No");
        switch (turno) {
            case "1":
                let celuturno = prompt("Para turnos comuniquese al 0800-100-555 o deje su numero de celular y nos comunicaremos con usted.")
                console.log(celuturno);
                break;
            case "2":
                alert("Muchas gracias por su consulta.")
            default:
                break;
        }
        break;

    case "2":
        let turno1 = prompt("El valor de este tratamiento es de 15.000$." + "\nDesea pedir un turno?" + "\n1- Si" + "\n2-No");
        switch (turno1) {
            case "1":
                let celuturno = prompt("Para turnos comuniquese al 0800-100-555 o deje su numero de celular y nos comunicaremos con usted.")
                console.log(celuturno);
                break;
            case "2":
                alert("Muchas gracias por su consulta.")
            default:
                break;
        }
        break;
    case "3":
        let turno2 = prompt("El valor de este tratamiento es de 5.000$ ." + "\nDesea pedir un turno?" + "\n1- Si" + "\n2-No");
        switch (turno2) {
            case "1":
                let celuturno = prompt("Para turnos comuniquese al 0800-100-555 o deje su numero de celular y nos comunicaremos con usted.")
                console.log(celuturno);
                break;
            case "2":
                alert("Muchas gracias por su consulta.")

                break;
            default:
                break;
        }
        break;

    default:
        console.log("Opción no válida");
        break;
}