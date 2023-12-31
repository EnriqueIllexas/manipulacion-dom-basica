## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

Cajtas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
- ¿Cuál operador me permite sumar o concatenar?

EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: strig (@fulanito)
- Edad: number
- Correo electrónico: string (lala@gmail.com)
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let nombre = 'Juan David';
let apellido = 'Catro Gallego';
let username = 'juandc';
let edad = 19;
let mail = 'juanito@alcachofa.xyz';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado - deudas;
```



## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
    Las funciones nos permiten encapsular bloques para reutilizarlos y ejecutarlos luego
    
- ¿Cuándo me sirve usar una función en mi código?

    Nos sirve crear una funcion cuando tenemos variebles o bloques de codigo muy parecidos con cambios que podrian seer parametos y argumentos.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    .Las fuciones reciben parametros cuando la creamos y les enviamos argumentos cuando las ejecutamos.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    Son la forma en que ejecutamos un bloque de codigo u otro dependen de alguna condixion o validacion.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    if (eles y elfe if), swich
    el condicional if nos permite hacer validaciones completamente distintas(si asi queremos) dn cada validacion o condicional.En cambio, en el swich todos los cases se comparan con la misma variable o condicion que definimoss en el swich.

- ¿Puedo combinar funciones y condicionales?

    Sí, las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if(tipoDeSuscripcion  == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion = "Expert"){
     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion = "ExpertDuo"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
    
    La forma de ejecutar un loque de codigo hasta que se cumpla cierta condición.

- ¿Qué tipos de ciclos existen en JavaScript?

    White, for, do white.

- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validacion de nuestros condicionales nunca se cumple y termina toteanto la aplicacion e.j

- ¿Puedo mezclar ciclos y condicionales?

    Sí, aunque los ciclos son una especie de condicionales, nada nos impide agregar    mas condicionales dentro del ciclo.

/*Diccionario jeje : toteanto significa bugear el editor por un ciclo infito*/
### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
**i++ significa que cada vez que el ciclo de una vuelta iterar el bloque de codigo de abajo hasta que "la validacion" se pueda cumplir**

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volv emos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
```javascript 
let resultado = prompt("¿Cuanto es 2 + 2?")

while(resultado != 4){
    resultado = prompt("¿Cuanto es 2 + 2?")
}

alert("Felicitaciones!!");
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
    Es una lista de elementos.
- ¿Qué es un objeto?
    Es una lista de elementos pero cada elemento tiene un nombre clave.
- ¿Cuándo es mejor usar objetos o arrays?
    ```js
    const obj = {
        nombre : "Fulanito",
        edad: 3,
        comidasFavoritas:["Pollo frito", "vegetales"]
    }
    ```
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Arrays cuando lo  ue haremos en un elemento es lo mismo que en todos los demas (la regla se puede incumplir), mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
```js 
    function imprimirPrimerElemntoArray(arr) {
    console.log(arr[0]);
}
```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```js
function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```
### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).[]
```js
function imprimirElementoPorElementoObjeto(obj) {                                        const arr = Object.values(obj)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
```