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


function mostrar()
{
var i=1
var letra
var numero
var respuesta="si"
var contadorpares=0
var contadorimpares=0
var contadorceros=0

do{
letra = prompt("Ingrese una letra");
while(isNaN(letra)==false) /*COMO VALIDO QUE SEA UN SOLO CARACTER*/
{
    letra = prompt("Error. Ingrese una letra")
}
numero = parseInt(prompt("Ingrese un numero de -100 a 100"));
while(numero<-100 || numero>100 || isNaN(numero))
{
    numero = parseInt(prompt("Error. Ingrese un numero de -100 a 100"));
}

if(numero!=0 && numero%2==0) /*OK?? O COMO SACO EL CERO. EL CER0 ES PAR?*/
{
    contadorpares++

}else if(numero==0)
{
    contadorceros++
}

else
{
contadorimpares++
}
respuesta = prompt("Querés ingresar otra letra y otro numero? si/no")
while(respuesta!="si" && respuesta!="no")
{
    respuesta = prompt("Error. Querés ingresar otra letra y otro numero? si/no");
}
}while(respuesta=="si");


document.write("Cantidad de numeros pares: " +contadorpares +"<br/>"+
"Cantidad de numeros impares: " +contadorimpares +"<br/>"+
"Cantidad de numeros ceros: " +contadorceros +"<br/>")


}
