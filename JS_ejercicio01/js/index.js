console.log("hola mundo :p");

function calculadora (num1, num2, ope) {
    let r;

    switch (ope) {

        case 'suma': 
            r = num1 + num2;
            break;
        case 'resta': 
            r = num1 - num2;
            break;
        case 'multiplicacion': 
            r = num1 * num2;
            break;
        case 'division': 
            if (num === 0) {
                console.log ("Error, no se pude dividir entre cero");
            }
            r = num1 / num2;
            break;
        default: 
            console.log ("Opcion no valido, escriba bien la opcion.");
            return;
    }
    return r;
}

let num1 = Number.parseInt(prompt("Ingresa el primer numero:"));
let num2 = Number.parseInt(prompt("Ingresa el segundo numero:"));
let ope = prompt("Ingresa la operacion que deseas realizar (suma, resta, multiplicacion, division)");

let r = calculadora(num1, num2, ope);
if (r !== undefined) {
    console.log(`El resultado de la ${ope} es: ${r}`);
    alert(`El resultado de la ${ope} es: ${r}`);
}
