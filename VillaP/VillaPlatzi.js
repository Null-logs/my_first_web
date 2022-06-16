function aleatorio (min,max){

    /*
    var resultado;
    resultado = Math.floor(Math.random() * (max - min)) + min;
    return resultado;
    */
    return Math.floor(Math.random() * (max - min)) + min;
}

function dibujar(){
    if(tile.cargaOk){
        papel.drawImage(tile.imagen, 0, 0);
    }

    if(vaca.cargarOk){
        for (i = 0; i <= limiteDibujo; i++)
        {
            var x = aleatorio(0,6);
            var y = aleatorio(0,6);
            var caudra = 70;
            papel.drawImage(vaca.imagen, x*caudra, y*caudra);
        }
    }

    if(cerdo.cargaOk){
        for (i = 0; i <= limiteDibujo; i++)
        {
            var x = aleatorio(0,8);
            var y = aleatorio(0,8);
            var caudra = 50;
            papel.drawImage(cerdo.imagen, x*caudra, y*caudra);
        }
    }

    if(pollo.cargaOk){
        for (i = 0; i <= limiteDibujo; i++)
        {
            var x = aleatorio(0,8);
            var y = aleatorio(0,8);
            var caudra = 50;
            papel.drawImage(pollo.imagen, x*caudra, y*caudra);
        }
    }

}
    function cargarFondo(){
        tile.cargaOk = true;
        dibujar();
    }

    function cargarVacas(){
        vaca.cargarOk = true;
        dibujar();
    }

    function cargarCerdos(){
        cerdo.cargaOk = true;
        dibujar();
    }

    function cargaPollos(){
        pollo.cargaOk = true;
        dibujar();

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

tile.imagen.addEventListener("load", cargarFondo);
vaca.imagen.addEventListener("load", cargarVacas)
cerdo.imagen.addEventListener("load", cargarCerdos);
pollo.imagen.addEventListener("load", cargaPollos);