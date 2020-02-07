/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var uno;
    uno = parseInt(document.getElementById("numeroUno").value);
    var dos;
    dos = parseInt(document.getElementById("numeroDos").value);
    alert("La suma es: "+ (uno+dos));

}

function restar()
{
    var uno;
    uno = parseInt(document.getElementById("numeroUno").value);
    var dos;
    dos = parseInt(document.getElementById("numeroDos").value);
    alert("La resta es: "+ (uno-dos));
}

function multiplicar()
{ 
	var uno;
    uno = parseInt(document.getElementById("numeroUno").value);
    var dos;
    dos = parseInt(document.getElementById("numeroDos").value);
    alert("El producto es: "+ (uno*dos));
}

function dividir()
{
	var uno;
    uno = parseInt(document.getElementById("numeroUno").value);
    var dos;
    dos = parseInt(document.getElementById("numeroDos").value);
    alert("El cociente es: "+ (uno/dos));
}

