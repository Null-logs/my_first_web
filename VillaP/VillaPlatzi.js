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

    // if(vaca.cargarOk){
    //     for (i = 0; i <= limiteDibujo; i++)
    //     {
    //         var x = aleatorio(0,6);
    //         var y = aleatorio(0,6);
    //         var caudra = 70;
    //         papel.drawImage(vaca.imagen, x*caudra, y*caudra);
    //     }
    // }

    // if(cerdo.cargaOk){
    //     for (i = 0; i <= limiteDibujo; i++)
    //     {
    //         var x = aleatorio(0,8);
    //         var y = aleatorio(0,8);
    //         var caudra = 50;
    //         papel.drawImage(cerdo.imagen, x*caudra, y*caudra);
    //     }
    // }

    // if(pollo.cargaOk){
    //     for (i = 0; i <= limiteDibujo; i++)
    //     {
    //         var x = aleatorio(0,8);
    //         var y = aleatorio(0,8);
    //         var caudra = 50;
    //         papel.drawImage(pollo.imagen, x*caudra, y*caudra);
    //     }
    // }

}

function cargarGeneral(objetoVerificable){
    objetoVerificable.cargaOk = true;
    console.log("____________");
    console.log(objetoVerificable);
    console.log(objetoVerificable.cargaOk)

    dibujar();
}

    function cargarFondo(){
        tile.cargaOk = true;
        dibujar();
    }

    // function cargarVacas(){
    //     vaca.cargarOk = true;
    //     dibujar();
    // }

    // function cargarCerdos(){
    //     cerdo.cargaOk = true;
    //     dibujar();
    // }

    // function cargaPollos(){
    //     pollo.cargaOk = true;
    //     dibujar();

    // }



function manufacturaDeJsons(imageName){
    var imageName = {
        url: "./Recursos/" + imageName + ".png",
        cargaOk: false
    }
    
    imageName.imagen = new Image();
    imageName.imagen.src = imageName.url;

    return imageName;
}

// function manufacturaAgregarImagen(imageName){
//     imageName.imagen = new Image();
//     imageName.imagen.src = imageName.url;
    
//     console.log(fondo);

//     imageName.imagen.addEventListener("load", cargarFondo());

//     console.log(fondo);

//     return imageName;
// }


var limiteDibujo = aleatorio(0,5);
console.log(limiteDibujo);
//Dibujar el fondo de la villa
var vp = document.getElementById("villaPLatzi");
var papel = vp.getContext("2d");

var tile = manufacturaDeJsons("tile");
// fondo = manufacturaAgregarImagen(fondo);

// var fondo = {
//     url: "./Recursos/tile.png",
//     cargarOk: false
// }

// var vaca = manufacturaDeJsons("vaca");

// var vaca = {
//     url: "./Recursos/vaca.png",
//     cargarOk: false
// }

//var cerdo = manufacturaDeJsons("cerdo")

// var cerdo = {
//     url: "./Recursos/cerdo.png",
//     cargaOk: false
// }

//var pollo = manufacturaDeJsons("pollo");

// var pollo = {
//     url: "./Recursos/pollo.png",
//     cargaOk: false
// }

// fondo.imagen = new Image();
// fondo.imagen.src = fondo.url;
tile.imagen.addEventListener("load", cargarFondo);


// vaca.imagen = new Image();
// vaca.imagen.src = vaca.url;
// vaca.imagen.addEventListener("load", cargarVacas)


// cerdo.imagen = new Image();
// cerdo.imagen.src = cerdo.url;
// cerdo.imagen.addEventListener("load", cargarCerdos);

// pollo.imagen = new Image();
// pollo.imagen.src = pollo.url;
// pollo.imagen.addEventListener("load", cargaPollos);