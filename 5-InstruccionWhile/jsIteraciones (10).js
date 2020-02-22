/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


function mostrar() {
	var numero;
	var contadorneg=0;
	var contadorpos=0;
	var negativos=0;
	var positivos=0;
	var respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero=parseInt(prompt("No es un numero. Ingrese un numero"));
		}
		
		if(numero>0)
		{
			positivos = positivos+numero;
			contadorpos++
		}
		if(numero<0)
		{
			negativos = negativos+numero;
			contadorneg++
		}


		respuesta= prompt("Quiere ingresar otro numero? si/no");




	}while(respuesta=="si");



	document.write(	"1-Suma de los negativos:"+  negativos + "</br>"+
				"1-Suma de los positivos:"+  positivos + "</br>"
	)
/*2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/


}
// DATAZO: con "</br>" hago un enter en el doc.write
// par >>> cuando el % da 0.