/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //Declaro variables
    //Tomo los datos desde las cajas de texto ("elNombre") y ("laEdad")
    //La caja de texto tiene que se el mismo que figura en el .html 
    var nombre;
    nombre= document.getElementById("elNombre").value;
    var edad;
    edad = document.getElementById("laEdad").value;
    alert("Usted se llama "+nombre+" y tiene "+edad+ " años");

}

