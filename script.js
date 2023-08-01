const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const form = document.querySelector("#form");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputsValues);
/*variable.addEventListener("click", funcion);  */

function sumarInputsValues(event){
    /*console.log({event}); */
    event.preventDefault();
    /*console.log(Number(input1.value) + parseInt(input2.value)); */
    const sumaInputs = Number(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado de la suma es " + sumaInputs;
} 