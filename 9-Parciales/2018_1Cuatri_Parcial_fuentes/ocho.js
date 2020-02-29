/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el 
ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/


function mostrar() {
    var i = 1
    var letra
    var numero
    var respuesta = "si"
    var contadorpares = 0
    var contadorimpares = 0
    var contadorceros = 0
    var positivos = 0
    var negativos = 0
    var promedioposit = 0
    var contadorpositivos = 0
    var numeroMax
    var numeroMin
    var letraMax
    var letraMin
    var flag = 0

    do {
        letra = prompt("Ingrese una letra");
        while (!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z")))    //ver tabla de codigo ASCII
        //(!isNaN(letra) || letra.length !=1) 
        {
            letra = prompt("Error. Ingrese una letra")
        }
        numero = parseInt(prompt("Ingrese un numero de -100 a 100"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Error. Ingrese un numero de -100 a 100"));
        }
//---------------------------------------------------------
        if (numero % 2 == 0) /*OK?? O COMO SACO EL CERO. EL CER0 ES PAR?*/ {
            contadorpares++
        }

        else {
            contadorimpares++
        }
//---------------------------------------------------------
        if (numero == 0) {
            contadorceros++
        }
        else if (numero > 0) {
            positivos = numero + positivos
            contadorpositivos++
        }
        else {
            negativos = numero + negativos
        }
//-----------------------------------------------------------
        if (flag == 0 || numero > numeroMax) {
            numeroMax = numero
            letraMax = letra

        }
        if (flag == 0 || numero < numeroMin) {
            numeroMin = numero
            letraMin = letra
            flag = 1
        }


        respuesta = prompt("Querés ingresar otra letra y otro numero? si/no")
        while (respuesta != "si" && respuesta != "no") {
            respuesta = prompt("Error. Querés ingresar otra letra y otro numero? si/no");
        }
    } while (respuesta == "si");

    if (contadorpositivos == 0) {
        promedioposit = 0
    }
    else {
        promedioposit = positivos / contadorpositivos
    }
    document.write("Cantidad de numeros pares: " + contadorpares + "<br/>" +
        "Cantidad de numeros impares: " + contadorimpares + "<br/>" +
        "Cantidad de numeros ceros: " + contadorceros + "<br/>" +
        "El promedio de números positivos: " + promedioposit + "<br/>" +
        "Suma de negativos: " + negativos + "<br/>" +
        "Maximo: " + numeroMax + " - " + letraMax + "<br/>" +
        "Minimo: " + numeroMin + " - " + letraMin)



}
