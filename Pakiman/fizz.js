var limite = 20;
var divisible = false;
var divisor3 = 3;
var divisor5 = 5;

for (var i = 1; i <= limite; i++){

    divisible = false;

    if(i % 3 == 0)
    {
        document.write("fizz");
        divisible = true;
    }

    if(i%5 == 0)
    {
        document.write("buzz")
        divisible = true;
    }

    if (!divisible) {
        document.write(i);
    }
        
    document.write("<br />");
    
}

document.write("<br />");
document.write("<br />");
document.write("<br />");

// Mio

var i = 1;
while(i <= limite){
    if( (i % 3 != 0) && (i % 5 != 0)){
        document.write(i);
    }else if((i % 3 == 0) && (i % 5 == 0)){
        document.write("Fizz & Bozz");
    }else if(i % 3 == 0){
        document.write("Fizz");
    }else if((i % 5 == 0)){
        document.write("Buzz");
    }
        document.write("<br />")
        i++;
}

document.write("<br />");
document.write("<br />");
document.write("<br />");

// Mio con funcion

var i = 1;
while(i <= limite){
        
    if((!esDivisible(i,divisor3)) && (!esDivisible(i,divisor5))){
        document.write(i);
    }else if((esDivisible(i,divisor3)) && (esDivisible(i,divisor5))){
        document.write("Fizz & Bozz");
    }else if((esDivisible(i,divisor3))){
        document.write("Fizz");
    }else if((esDivisible(i,divisor5))){
        document.write("Buzz");
    }
        document.write("<br />")
        i++;
}

document.write("<br />");
document.write("<br />");
document.write("<br />");

//optimizado

for (var i = 1; i <= limite; i++){


    if(i % 3 == 0)
    {
        document.write("fizz");
    }

    if(i%5 == 0)
    {
        document.write("buzz")
    }

    if ((i % 3 != 0) && (i % 5 != 0)) {
        document.write(i);
    }
        
    document.write("<br />");
    
}


function esDivisible (numeroI, divisor){
    if(numeroI % divisor == 0){
        return true
    }
    return false;
}