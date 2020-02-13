
//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
// mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
 

function mostrar()
{
var edad;
edad = parseInt(document.getElementById("edad").value);

var estado;
estado = document.getElementById("estadoCivil").value

if(edad<18 && estado!="Soltero")
{
    alert("muy pequeño ")
}

}
// DATAZOS
// https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=795:operadores-logicos-javascript-relacionales-igual-distinto-and-or-not-prioridades-ejemplos-cu01117e&catid=78&Itemid=206