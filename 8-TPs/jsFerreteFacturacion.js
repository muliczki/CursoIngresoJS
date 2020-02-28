/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar() {
    var Uno = parseInt(document.getElementById("PrecioUno").value)
    var Dos = parseInt(document.getElementById("PrecioDos").value)
    var Tres = parseInt(document.getElementById("PrecioTres").value)
    if(isNaN(Uno) || isNaN(Dos) || isNaN(Tres))
    {
        alert("Ingresa todos los precios");
    }
    else {
    alert("La suma es: "+ (Uno + Dos + Tres));
    }
}
function Promedio() {
    var Uno = parseInt(document.getElementById("PrecioUno").value)
    var Dos = parseInt(document.getElementById("PrecioDos").value)
    var Tres = parseInt(document.getElementById("PrecioTres").value)
    if(isNaN(Uno) || isNaN(Dos) || isNaN(Tres))
    {
        alert("Ingresa todos los precios");
    }
    //AGREGAR LA VALIDACION DE SI HAY UN NUMERO 0
    else {
    alert("El promedio es: "+((Uno + Dos + Tres) / 3).toFixed(2));
    }
}
function PrecioFinal() {
    var Uno = parseInt(document.getElementById("PrecioUno").value)
    var Dos = parseInt(document.getElementById("PrecioDos").value)
    var Tres = parseInt(document.getElementById("PrecioTres").value)

    if(isNaN(Uno) || isNaN(Dos) || isNaN(Tres))
    {
        alert("Ingresa todos los precios");
    }
    else {
    
    alert("El precio final es: "+((Uno + Dos + Tres) * 0.21 + (Uno + Dos + Tres)).toFixed(2));
    }
}
