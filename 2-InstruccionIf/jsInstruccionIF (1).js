

//Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

function mostrar()
{
var edad;
edad = parseInt(document.getElementById("edad").value);

if(edad==15) //pregunto por la condicion
{ 
    alert("niña bonita"); //va lo que pasa si se cumple la condicion
}
}//FIN DE LA FUNCIÓN

// == para usar como igualdad. el = solo se usa para asignar lo que vale una linea
// === compara tipo de dato. ejemplo: si es numero o texto