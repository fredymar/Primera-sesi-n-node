let nombre = "Michael"
const deVariable = 324

//console.log(nombre, deVariable)
//let valor = 30
// operadores lógicos

// = asignar

// == es igual al contenido

//=== comparar si es igual el contenido y el tipo de dato

// > mayor

// < menor 

// >= mayor o igual

// <= menor o igual 

// && = y

// || = ó

// si un numero es cero, positivo o negativo

   /* if(valor > 0){
        console.log("El valor es positivo")
    }else if(valor < 0){
        console.log("EL valor es negativo")
    }else{
        console.log("El valor es igual a 0 o no es un numero")
    }*/
// si un numero es par o impar

/*if(valor % 2 === 0){
    console.log("el numero es par")
}else if( valor % 2 !== 0){
    console.log("es impar")
}*/

//Si el numero es multiplo de 3 debe imprimir "x", si el numero es multiplo de 5 debe imprimiy "D", si el numero es multiplo ambos debe imprimir "XD"

/*if(valor % 3===0 && valor % 5 ===0){
    console.log("XD");
}else if (valor % 5 ===0) {
    console.log("D");
}else if (valor % 3 === 0) {
    console.log("X");
}*/

/*let square = ""

for (let i = 0; i < 5; i++) {
    square += "*"
}

console.log(square);*/

// hacer cuadrado con asteriscos

/*let valor = 4
let array = []
let row = ""
for (let i = 0; i <= valor; i++) {
    if (i == 0 || i ==  valor) {
       for (let j = 0; j <= valor; j++) {
            row += "*"
       }
       array.push(row)
       row = ""
    } else{
        for (let j = 0; j <= valor; j++) {
            if (j == 0 || j == valor) {
                row += "*"
            }else{
                row += " "
            }
            
        }
        array.push(row)
        row = ""
    }
}

for (linea of array){
    console.log(linea)
}*/


//tabla del 5
for (let i = 0; i <= 100; i++) {
    console.log("5 x "+ i + "="+ 5 * i)
}