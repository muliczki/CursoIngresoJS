/*Enunciado:
Al presionar el botón pedir números hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while(respuesta =="si")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		respuesta=prompt("Queres ingresar otro num?");

		acumulador = acumulador + numero;

		contador++
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN