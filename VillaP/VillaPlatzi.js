
/*
var z = aleatorio(10, 20);
document.write(z);
*/

var i = 0;
while(i < 10){
    document.write(aleatorio(3, 1) + " ");
    i++;
}





function aleatorio (min,max){ 

    /*
    var resultado;
    resultado = Math.floor(Math.random() * (max - min)) + min;
    return resultado;
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

