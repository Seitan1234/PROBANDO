// let continuar = true

while (continuar) {

let entrada = prompt("Hola ingrese un numero del 1 al 5 :")    

if (entrada == 5){
    alert("Usted ingreso 5")
} else if (entrada == 4){
    alert("Usted ingreso 4")
}else if (entrada == 3){
    alert("Usted ingreso 3")
}else if (entrada == 2){
    alert("Usted ingreso 2")
}else if (entrada == 1){
    alert("Usted ingreso 1")
}else{
    alert("Usted ingreso cualquier mierda")
}
}
let continuar = confirm("Quiere volver a empezar?")