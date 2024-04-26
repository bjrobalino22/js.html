var saludo= "hola mundo javascript"
console.log(saludo)
// forma de escribir sintaxis // 
/*
var nombre 
var $nombre
var _nombre
var nombre1 
var nombre_estudiante 
como no se puede escribir 
var 8nombre 
tampoco se puede asignar un avsriable con las palabras recervadas : var, if . while, case, for 
como creamos archivos js 
var holamundo 
def Holamundo{

}
*/
/* --------------variabkes java script--------
Existen dos tipo 
var=> es una variable global puede se ulizada en toda la vida del programa 
let=> es una variable privada que se utilizasa en una parte especifica del codigo 
*/
/*
{
let hello= "hello world"
}

*/
var a
a=7 
console.log ("el valor de a es:",a)
let b 
b=6 
console.log("el valor de b es",b )
console.log(window)
console.log(window.a)
console.log(window.b)

var musica="Baldas"
console.log("Variable antes del bloque",musica)
{
    var musica="cumbia"
    console.log("variable dentro de bloque",musica)
}
console.log("variable dentro del bloque",musica)
console.log("*********Let******")
let musica2="salsa"
console.log("variable antes del bloque",musica2) 
{
    let musica2="Merengue"
    console.log("variable dentreo de bloque",musica2)
}
console.log("variable fuera del bloque",musica2 )
