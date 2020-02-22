/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;

while(contador<5)
{
//acumulador += parseInt(prompt("Escribi un número")); >> es lo mismo que poner lo de abajo
numero = parseInt(prompt("Escribi un número"));
	while(isNaN(numero))
{
	numero=parseInt(prompt("no es un numero.Escribi un número"));
}
acumulador=acumulador+numero
contador++
}
promedio=acumulador/5

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio

}//FIN DE LA FUNCIÓN


