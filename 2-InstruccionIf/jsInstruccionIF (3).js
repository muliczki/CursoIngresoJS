// Al ingresar una edad debemos informar 
// si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar() {
    var edad;
    edad = parseInt(document.getElementById("edad").value);

    if (edad >= 18) {
        alert("Sos mayor de edad");
    }
    else {
        alert("Sos menor de edad");
    }


}//FIN DE LA FUNCIÓN

// NUNCA va ; despues de los () del IF. se deja sin nada. 
// sino no me reconoce lo que sigue

// uso el else para poner lo que pasa si es falso el IF.
// alt + shift + F   >>> SE TE ACOMODA EL CODIGO (PEEEOLA)
// xxxvariablexxx.toFixed(0)  para sacar los decimales de la variable, entre (Q de decimales)