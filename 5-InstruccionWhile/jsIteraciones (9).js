/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo ingresado.*/


function mostrar()
{

	var flag=0;
	var numero;
	var respuesta;
	var maximo;
	var minimo;


	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("No es un numero. Ingrese un numero"));
		}
		respuesta = prompt("Querés agregar otro número? si/no");
		

		console.log(numero);
		if(flag==0 || numero>maximo)
		{
			maximo=numero;
		}
	
		if(flag==0 || numero<minimo)
		{
			minimo=numero;
			flag=1
		}
		

	}while(respuesta=="si");

	
	document.getElementById("maximo").value= maximo;
	document.getElementById("minimo").value= minimo;



}//FIN DE LA FUNCIÓN