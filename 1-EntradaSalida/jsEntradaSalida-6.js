/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //parseInt me transforma el texto en numero, hace que la PC reconozca 
    // que es un numero

    
    var uno;
    uno = parseInt(document.getElementById("numeroUno").value);
var dos;
    dos = parseInt(document.getElementById("numeroDos").value);

alert("La suma es "+ (uno+dos));

}

