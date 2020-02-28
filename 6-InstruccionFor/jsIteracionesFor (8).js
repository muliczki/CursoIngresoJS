/*Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar() 
{
    var numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Error. Ingrese un numero"));
    }
    var contadorPrimo=0
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contadorPrimo++
        }
    }
    if(contadorPrimo==2)
    {
        console.log("Es un numero primo: "+ numero);
    }
    }//FIN DE LA FUNCIÓN