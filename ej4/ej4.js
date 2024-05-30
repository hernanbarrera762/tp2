function calcularIMC(){
const peso = document.getElementById("peso").value
const altura = document.getElementById("altura").value

let imc = peso / altura**2
alert(imc)

}