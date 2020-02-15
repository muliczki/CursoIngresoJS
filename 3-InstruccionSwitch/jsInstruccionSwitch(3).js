/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"*/

function mostrar()
{ 
var mes = document.getElementById("mes").value;

switch(mes)
{
    case "Febrero":
        alert("Este mes no tiene más de 29 días");
        break;

    default:
        alert("Tiene más de 30 días");
        break;
}
	
	


}//FIN DE LA FUNCIÓN