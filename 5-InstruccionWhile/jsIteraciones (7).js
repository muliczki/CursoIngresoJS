/*Enunciado:
Al presionar el botón pedir números hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("No es un número. Ingrese un número"))
		}
		respuesta=prompt("Queres ingresar otro num? si/no");

		acumulador = acumulador + numero;

		contador++
	}while(respuesta=="si");
	
	
	
	
	/*while(respuesta =="si")     >ACA TENGO QUE DARLE UN VALOR A LA VAR RESPUESTA, SINO NO ENTRO NUNCA
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("No es un número. Ingrese un número"))
		}
		respuesta=prompt("Queres ingresar otro num?");

		acumulador = acumulador + numero;

		contador++
	}*/



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
/*do
{}
while();  cuando quiero que se ejecute por lo menos 1 vez.

for >> cuando se la cantidad de repeticiones*/