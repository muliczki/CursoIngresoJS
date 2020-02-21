/*Enunciado:
Al presionar el botón pedir un sexo 'f' para femenino, 'm' para masculino.*/

function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase();

//while (sexo!="f" && sexo!="m")
while (!(sexo=="f" || sexo=="m"))
{
    sexo = prompt("Sexo invalido. Ingrese F o M ").toLowerCase();
}

document.getElementById("Sexo").value = sexo


}//FIN DE LA FUNCIÓN