/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, 
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	var numero;

	while (respuesta!="no")
	{
		numero = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("Queres ingresar otro numero?");
		if(numero>=0)
		{
			positivo +=numero;
		}
		else if ()
		{
			negativo *= numero;
		}
		contador++;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN