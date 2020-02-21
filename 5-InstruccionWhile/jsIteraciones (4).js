/*Enunciado:
al presionar el botón pedir un número entre 0 y 9 inclusive.*/

function mostrar() {

	var numero = prompt("ingrese un número entre 0 y 10.");

	//while(numero>10 || numero<0 || isNaN(numero))
	while( !(numero<10 && numero>=0))
	{
		numero = prompt("Incorrecto. Ingrese un número entre 0 y 10.")
	}
	document.getElementById("Numero").value = numero;

	}
//isNan(numero) >> me dice si NO es un numero. Es verdadero cuando la variable es texto.