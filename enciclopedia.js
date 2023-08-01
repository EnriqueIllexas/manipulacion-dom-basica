const h1 = document.querySelector("h1");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
/*InnerText solo entiende lo que esta entre "" como un texto */
/*InnerHTML cambia una etiqueta html desde js */
h1.innerText = "patito onichan <br> feo"
h1.innerHTML = "patito onichan <br> feo"

/*console.log(h1.getAttribute("pantalla"));
h1.setAttribute("class", "rojo"); */

/*classList La propiedad de sólo lectura Element.classList devuelve una colección activa de los atributos de clase del elemento. */
/*ADD : Agrega un valor */
/*Remove : Quita un valor o elemento */
h1.classList.add("rojo");
h1.classList.remove("verde");
/*h1.classList.toggle("verde");
h1.classList.contains("verde")*/

input.value = "199";
/*.value sirve para establecer un valor significativo a la etiqueta input (en este caso) */

/*_____ FUNCION ______ */
/*Esta funcion sirve para rellenar la etiqueta img con js */

const img = document.createElement("img")
img.setAttribute("src", "https://okdiario.com/img/2020/02/03/-que-hora-es-en-el-espacio-esta-es-la-respuesta-655x368.jpg")
console.log(img);
/* CreateElement: En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName, o un HTMLUnknownElement (en-US) si su tagName no se reconoce. */
/*setAttribute : Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado. */
/*_____________________ */

pid.innerHTML = ""; 
pid.appendChild(img);

/*_____FUNCION______ */
/*Esta funcion sirve exactemente para que cada vez que se precione el elemento BOTON ejecute la funcion de sumar los dos inputs  */

const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function btnOnClick(i){
   const sumaInputs = Number(input1.value) + parseInt(input2.value);
    pResult.innerHTML = "Resultado de la suma es " + sumaInputs;
}

/*parseInt: Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada. */
/*Number: Establece el valor (input1.value) en numero*/
/*en este caso value saca el valor que el input tiene y se los da a las etiquetas Number y parseInt */
/*__________________ */