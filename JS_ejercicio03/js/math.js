export function calcular(num1, num2, ope) {
    let r;
    switch (ope) {
        case '+':
            r = num1 + num2;
            break;
        case '-':
            r = num1 - num2;
            break;
        case '*':
            r = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Error: no se puede dividir entre cero");
                return;
            }
            r = num1 / num2;
            break;
        default:
            alert("Operador no válido");
            return;
    }
    return r;
}
