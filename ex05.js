/*5.Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.*/

const marcos = {
     name: "Marcos",
     age: 25,
     genre: "Masculino",
     profession: "Porteiro",
     naciolality: "Brasileira"
 }

const lucas = {
     name: "Lucas",
     age: 43,
     genre: "Masculino",
     profession: "Médico",
     naciolality: "Brasileira"
 }

const ringo = {
     name: "Ringo",
     age: 54,
     genre: "Masculino",
     profession: "Pedreiro",
     naciolality: "Alemã"
 }

const maria = {
     name: "Maria",
     age: 32,
     genre: "Feminino",
     profession: "Advogada",
     naciolality: "Americana"
 }

const joana = {
     name: "Joana",
     age: 28,
     genre: "Feminino",
     profession: "Enfermeira",
     naciolality: "Holandesa"
 }

if(lucas.age >= 18 && lucas.naciolality === "Brasileira"){
     console.log('Aprovado')
 } else {
     console.log('Não aprovado')
 }

