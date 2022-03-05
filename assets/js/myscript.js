/*Requerimientos
1. Crear una función para solicitar el número y validar antes de mostrar el resultado que el número ingresado se encuentre entre 1 y 20. En caso de que no corresponda al
rango, mostrar un mensaje al usuario: "número fuera del rango"
2. Utilizar las características propias de ES6 como let y arrow function para desarrollar el ejercicio.
3. Generar y mostrar por consola el resultado de las operaciones.
4. Aplicar un ciclo for anidado para obtener el factorial del número ingresado.*/

//función Arrow
let multiplicacion = () => {

    //Solicitud de ingreso y captura de dato
    alert("Bienvenidos a nuestro sistema de multiplicación.\nIngresa un número y te mostraremos las tablas de multiplicar desde el 1 hasta el número entregado.\nAdicionalmente te entregaremos el factorial para los mismos números.");
    alert("¡Comencemos!")
    let numero = parseInt(prompt("Ingrese un número entre el 1 y 20"));

    if (numero < 1 || numero > 20) {
        let contador = 0;
        do {
            alert("Número fuera de rango, intentalo nuevamente!")
            numero = parseInt(prompt("Ingrese un número entre el 1 y 20"));
            contador++;

        } while (numero < 1 || numero > 20)

    } else {
        for (let i = 1; i <= numero; i++) {
            console.log(`${numero} * ${i} = ${numero *i}`);
        }

        for (let i = 1; i <= numero; i++) {
            let resultado = 1;
            for (let j = 1; j <= i; j++) {
                resultado = resultado * j;
            }
            console.log(`Factorial de ${i} es ${resultado}`)
        }
    }
}
multiplicacion();