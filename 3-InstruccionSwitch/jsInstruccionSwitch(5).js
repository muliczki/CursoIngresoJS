/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/



function mostrar()
{
var hora = parseInt(document.getElementById("hora").value);

switch(hora)
{
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert("Es de mañana");
        break;
    

}
	
	// si quiero poner la hora sin "", poner parseInt en la var.



}//FIN DE LA FUNCIÓN