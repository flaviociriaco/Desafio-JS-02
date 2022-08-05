/*4.Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.*/

const firstNumber = 102
const secondNumber = 250
const thirdNumber = 300

if(firstNumber > secondNumber && firstNumber > thirdNumber){
     console.log(`O ${firstNumber} é o maior`)
 } else if(secondNumber > thirdNumber){
     console.log(`O ${secondNumber} é o maior`)
 } else {
     console.log(`O ${thirdNumber} é o maior`)
 }

 if(firstNumber < secondNumber && firstNumber < thirdNumber){
     console.log(`O ${firstNumber} é o menor`)
 } else if(secondNumber < thirdNumber){
     console.log(`O ${secondNumber} é o menor`)
 } else {
     console.log(`O ${thirdNumber} é o menor`)
 }