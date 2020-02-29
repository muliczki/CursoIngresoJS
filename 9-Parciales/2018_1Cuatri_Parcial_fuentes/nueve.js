/*
Ingrese datos
Mostrar información
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{
var marca;
var peso;
var temp;
var rta="s"
var temppares=0;
var pesomax;
var marcamax;
var pesomin;
var flag=0;
var bajocero=0;
var sumapeso=0;
var cantidadproductos=0
var promedio;

do{
marca=prompt("Ingrese la marca");
while(!isNaN(marca))
{
    marca=prompt("Error. Ingrese la marca");
}

peso =parseInt(prompt("Ingrese el peso entre 1 y 100"));
while(peso>100 || peso<1 || isNaN(peso) )
{
    peso =parseInt(prompt("Error. Ingrese el peso entre 1 y 100"));
}

temp =parseInt(prompt("Ingrese la temperatura entre -30 y 30"));
while(temp>30 || temp<-30 || isNaN(temp) )
{
    temp =parseInt(prompt("Error. Ingrese la temperatura entre -30 y 30"));
}

//-------------------temperaturas pares----------------------------
if(temp%2==0)
{
temppares++
}

//-------------------marca prod mas pesado // peso max y min----------------------

if(flag==0 || peso>pesomax)
{
    pesomax=peso
    marcamax=marca
}
if( flag==0 || peso<pesomin) 
    {
        pesomin=peso
        flag=1

}
//-------------------temperaturas menores a cero----------------------------
if(temp<0)
{
bajocero++
}
//------------------------------------------------------------------------
cantidadproductos++;
sumapeso=sumapeso+peso;

rta=prompt("Desea agregar otro producto? s/n");
while(rta!="s" && rta!="n")
{
    rta=prompt("Error. Desea agregar otro producto? s/n");
}
}while(rta=="s")

if(cantidadproductos==0)
{
    promedio=0
}
else 
{
    promedio=sumapeso/cantidadproductos
}

document.write("a) Cantidad de temperaturas pares: "+temppares+"</br>"+
"b) La marca del producto más pesado: "+ marcamax +"</br>"+
"c) La cantidad de productos a menos de 0 grados: "+ bajocero +"</br>"+
"d) El promedio del peso de todos los productos: "+promedio+ "</br>"+
"e) El peso máximo: "+ pesomax +"</br>"+
"f) El peso mínimo: "+ pesomin + "</br>")





}
