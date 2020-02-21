/*Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{

var clave = prompt("ingrese el número clave.");

while(clave!="utn750")
{
    clave = prompt("Clave incorrecta");
}
alert("Clave correcta!!");
}
