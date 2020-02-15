// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

function mostrar()
{
	/*alert(Math.round(10*Math.random()));*/
	
	var maximo = 10;
	var minimo = 1;

	alert(Math.floor((Math.random()*((maximo+1)-minimo)+minimo)));
/*//Math.floor((Math.random()*(maximo+minimo))+minimo)
		);	
		var i =0;
		while(i <100){
			console.log(Math.floor((Math.random()*((maximo+1)-minimo)+minimo)));
			i++;
		}*/



}//FIN DE LA FUNCIÓN

// math.random >> va del 0 al 1, si quiero otro numero tengo que *

/*Math.floor(Math.random (minimo y maximo))  ver como funciona, nadie sabe     */
