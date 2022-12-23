/* Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior */

// const comper = (number1, number2) => {
//     if(number1 > number2) {
//         console.log(`${number1} é o maior`)
//     }
//     else if (number1 < number2) {
//         console.log(`${number2} é o maior`)
//     } 
// }

const comper = (number1, number2) => {
    if(number1 > number2) {
        console.log(`o primeiro é maior`)
    }
    else {
        console.log(`o segundo é maior`)
    } 
}

comper(3, 6)