// Al ingresar una edad debemos informar si la persona es adolescente, 
// edad entre 13 y 17 años (inclusive) .


function mostrar() 
{
    var edad;
    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 13 && edad <= 17 )

    {
        alert("sos adolescente");
    }
    
}//FIN DE LA FUNCIÓN
// http://multimedia.uoc.edu/blogs/pw/es/2013/09/17/exercicis-de-javascript-iniciacio-solucions/