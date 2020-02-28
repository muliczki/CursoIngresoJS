/*Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero"));
while(isNaN(numero))
{
    numero= parseInt(prompt("Error. Ingrese un numero"));
}
var QDivisores =0;

for( var i = 1; i<=numero; i++)
{
    if(numero%i == 0)
    {
        console.log(i);
        QDivisores++;
    }
}

console.log("La cantidad de divisores que tiene el numero es: "+QDivisores);

}