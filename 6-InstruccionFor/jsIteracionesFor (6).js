/*Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.*/

function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero"));
while(isNaN(numero))
{
    numero=parseInt(prompt("No es un numero. Ingrese un numero"));
}
var contadorPares=0;

for(var i=1; i<= numero; i++)
{
    if(i%2==0)
    {
        console.log(i);
        contadorPares++
    }
}
console.log("Cantidad de numeros pares encontrados: "+contadorPares);
}