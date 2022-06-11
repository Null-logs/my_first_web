var teclas = {
    UP: 38, 
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};






var x = 150; //aux con dibujo con teclas
var y = 150; //aux con dibujo con teclas


// var aux con dibujo por mause
var estado = 0; 
var grosor = 3;
var colorLinea = "black";
var estado;
var mouseX;
var mouseY;
//console.log(teclas);

function dibujar_Linea(colorcito, x_ini, y_ini, x_fin, y_fin, grosor, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorcito;
    lienzo.lineWidth = grosor;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath;
}


function pulsarMouse(evt)
{

    estado = 1;
    mouseX = evt.layerX;
    mouseY = evt.layerY; 

}

function moverMouse(evt)
{
    if (estado == 1)
    {
        dibujar_Linea(colorLinea, mouseX, mouseY, evt.layerX, evt.layerY, grosor, papel);
        mouseX = evt.layerX;
        mouseY = evt.layerY;
    }
    else
    {
        mouseX = evt.layerX;
        mouseY = evt.layerY;
    }
}

function levantarMouse(evt)
{
    estado = 0;
}

function dibujarPorTeclado (evt) 
{
    
    var movimiento = 10;

    switch (evt.keyCode){
        case teclas.DOWN:
            dibujar_Linea(colorLinea, x, y, x, y + movimiento, grosor, papel);
            y = y + movimiento;
            console.log("abajo")
        break;
        
        case teclas.LEFT:
            dibujar_Linea(colorLinea, x, y, x - movimiento, y, grosor, papel);
            x = x - movimiento;
            console.log("Izquierda")
        break;

        case teclas.RIGHT:
            dibujar_Linea(colorLinea, x, y, x + movimiento, y, grosor, papel);
            x = x + movimiento;
            console.log("derecha")
        break;

        case teclas.UP:
            dibujar_Linea(colorLinea, x, y, x, y - movimiento, grosor, papel);
            y = y - movimiento;
            console.log("arriba")
        break;

        default:
            console.log("otra tecla")
        break;
    }
}


document.addEventListener("keydown", dibujarPorTeclado);
document.addEventListener("mousedown", pulsarMouse);
document.addEventListener("mousemove", moverMouse);
document.addEventListener("mouseup", levantarMouse);


var cuadrito = document.getElementById("areaDeDibujo"); //obtencion del canvas
var papel = cuadrito.getContext("2d");// obtención del contexto del canvas
dibujar_Linea("red", 149, 149, 151, 151, grosor, papel);