// Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
// "EXCELENTE" para notas igual a 9 o 10,
// "APROBÓ" para notas mayores a 4,
// "Vamos, la proxima se puede" para notas menores a 4


function mostrar() {
	var nota;
	nota = Math.round(10 * Math.random());
	console.log(nota);


	/*if (nota > 8) 
	{
		alert("Excelente: "+nota)
	}*/
	if (nota > 3 && nota < 9)
	{
		alert("Aprobó: "+nota)
	}
	else if(nota <4)
	{
		alert("Suerte la próxima: "+nota)
	}
	else
	{
		alert("Excelente: "+nota)
	}

}