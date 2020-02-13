function mostrar()
// Al ingresar una edad solo debemos informar si la persona NO es adolescente.
// o sea, menores a 13 y mayores a 17
{
var edad;
edad = parseInt(document.getElementById("edad").value);

if(edad<13 || edad>17)
{
    alert("no sos adolescente");    
}

// if (edad >= 13 && edad <= 17 )       otra opcion
// {}
// else {
    // alert("no sos adolescente");    
// }

}//FIN DE LA FUNCIÓN
// ALT GR + 1    > || ES O  