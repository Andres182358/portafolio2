function suma(){
    var suma1, suma2, result;
    suma1=prompt("Escribe un numero","");
    suma2=prompt("Escribe otro numero","");
    result=parseInt(suma1)+parseInt(suma2);
    alert("La suma es: "+result);
}
function resta(){
    var rest1, rest2, result;
    rest1=prompt("Escribe un numero","");
    rest2=prompt("Escribe otro numero","");
    result=parseInt(rest1)-parseInt(rest2);
    alert("La resta es: "+result);
}
function multiplicacion(){
    var mult1, mult2, result;
    mult1=prompt("Escribe un numero","");
    mult2=prompt("Escribe otro numero","");
    result=parseInt(mult1)*parseInt(mult2);
    alert("La multiplicacion es: "+result);
}
function division(){
    var div1, div2, result;
    div1=prompt("Escribe un numero","");
    div2=prompt("Escribe otro numero","");
    result=parseInt(div1)/parseInt(div2);
    alert("La division es: "+result);
}
function posinegati(){
    var num=prompt("Escribe un numero: ","")
    if (num>=0){
        alert("El numero es positivo 😁")
    }else{
        alert("El numero es negativo 😮")
    }
        
}