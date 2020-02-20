/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo = parseInt(document.getElementById("Largo").value)
    var Ancho = parseInt(document.getElementById("Ancho").value)
    var Radio = parseInt(document.getElementById("Radio").value)

alert("Comprar "+ ((Largo*2 + Ancho*2)*3) + " metros de alambre");    
}
// perimetro del rectangulo = 2*largo + 2*ancho

function Circulo () 
{
	var Largo = parseInt(document.getElementById("Largo").value)
    var Ancho = parseInt(document.getElementById("Ancho").value)
    var Radio = parseInt(document.getElementById("Radio").value)

    alert("Comprar "+((Radio*Math.PI*2)*3).toFixed(2)+ " metros de alambre");

}
// perimetro del circulo = 2*PI*radio o PI*diametro
function Materiales () 
{
	
}