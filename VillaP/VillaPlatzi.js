var teclas = {
    UP: 38, 
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


function dibujarPorTeclado (evt) 
{
   
    var movimiento = 10;
    switch (evt.keyCode){
        case teclas.DOWN:
            
            papel.drawImage(cerdo.imagen, x, y + movimiento);
            y = y + movimiento;
            dibujar();
            console.log("abajo")
        break;
        
        case teclas.LEFT:
            papel.drawImage(cerdo.imagen, x - movimiento, y);
            x = x - movimiento;
            dibujar();
            console.log("Izquierda")
        break;

        case teclas.RIGHT:
            dibujar();
            papel.drawImage(cerdo.imagen, x + movimiento, y);
            x = x + movimiento;
            dibujar();
            console.log("derecha")
        break;

        case teclas.UP:
            dibujar();
            papel.drawImage(cerdo.imagen, x, y + movimiento);
            y = y - movimiento;
            dibujar();
            console.log("arriba")
        break;

        default:
            console.log("otra tecla")
        break;
    }
}

function aleatorio (min,max){

    /*
    var resultado;
    resultado = Math.floor(Math.random() * (max - min)) + min;
    return resultado;
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

function dibujarCuadras(objetoAnimal){
    for (i = 0; i <= limiteDibujo; i++)
    {
        var x = aleatorio(0,6);
        var y = aleatorio(0,6);
        var caudra = 80;
        papel.drawImage(objetoAnimal.imagen, x*caudra, y*caudra);
    }
}

function dibujar(){
    if(tile.cargaOk){
        papel.drawImage(tile.imagen, 0, 0);
    }

    if(vaca.cargarOk){
        dibujarCuadras(vaca);
    }

    if(pollo.cargaOk){
        dibujarCuadras(pollo);
    }

    if(cerdo.cargaOk && cerdo.aux == 1){
        papel.drawImage(cerdo.imagen, x, y);
    }
}



function manufacturaDeJsons(imageName){
    var imageName = {
        url: "./Recursos/" + imageName + ".png",
        cargaOk: false
    }
    
    imageName.imagen = new Image();
    imageName.imagen.src = imageName.url;

    return imageName;
}


var limiteDibujo = aleatorio(0,5);
console.log(limiteDibujo);
var vp = document.getElementById("villaPLatzi");
var papel = vp.getContext("2d");

var tile = manufacturaDeJsons("tile");
var vaca = manufacturaDeJsons("vaca");
var cerdo = manufacturaDeJsons("cerdo");
var pollo = manufacturaDeJsons("pollo");

cerdo.aux = 1;

tile.imagen.addEventListener("load", function(){
        tile.cargaOk = true;
        dibujar();
});
vaca.imagen.addEventListener("load", function(){
        vaca.cargarOk = true;
        dibujar();
})
cerdo.imagen.addEventListener("load", function(){
        cerdo.cargaOk = true;
        dibujar();
});
pollo.imagen.addEventListener("load", function(){
    pollo.cargaOk = true;
    dibujar();
});

document.addEventListener("keydown", dibujarPorTeclado);

var x = 0;
var y = 0;


