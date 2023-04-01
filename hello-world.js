// let nombre = "Michael"
// const deVariable = 324

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

// for (let i = 0; i <= 5; i++) {
//     let square = ""
//     for (let j = 0; j <= 5; j++) {
//         if (i === 0 || i === 5 || j === 0 || j === 5) {
//             square += "*"
//         }else{
//             square += " "
//         }       
//     }
//     console.log(square)
// }


//tabla del 5
//for (let i = 0; i <= 10; i++) console.log(`5 * ${i} = ${5 * i}`)

// Reloj con las horas del dia

// for (let i = 0; i <= 23; i++) {
//     for (let j = 0; j <=59 ; j++) {
//         if(i < 10 && j <10){
//             console.log(`0${i}:0${j}`)
//         }else if(i < 10 && j > 9 ){
//             console.log(`0${i}:${j}`)
//         }else if (i > 9 && j > 9){
//             console.log(`${i}:${j}`)
//         }else if(i > 9 && j < 10){
//             console.log(`${i}:0${j}`)
//         }
//     }

// }

// numeros del 1 al 100 sin espacio

// let string = ""
// for (let i = 0; i <= 100; i++) {
//     if (i == 100) {
//         string += i
//     }else{
//         string += i + ","
//     }
// }
// console.log(string)

// 1000 primeros numeros primos

// for (let i = 2; i <= 1000; i++) {
//     let num = 0
//     for (let j = 0; j <= i; j++) {
//         if (i % j === 0) {
//             num += 1
//         }  
//     }
//     if (num === 2) {
//         console.log(`${i}`)
//      }
// }