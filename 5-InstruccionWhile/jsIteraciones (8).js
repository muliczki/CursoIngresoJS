/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{

	var flag=0;
	var positivo=0;
	var negativo=1;
	var respuesta
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("No es un numero. Ingrese un numero"));
		}
		if(numero>=0)
		{
			positivo +=numero;
		}
		else
		{
			negativo *= numero;
			flag=1;
		}
		respuesta = prompt("Queres ingresar otro numero? si/no");
	}while(respuesta=="si");
	
	if(flag==0)
	{
		negativo = 0;
	}
	
	
	
	/*while (respuesta=="si")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("No es un numero. Ingrese un numero"));
		}
		respuesta = prompt("Queres ingresar otro numero? si/no");
		if(numero>=0)
		{
			positivo +=numero;
		}
		else
		{
			negativo *= numero;
		}
		contador++;
	}*/


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN