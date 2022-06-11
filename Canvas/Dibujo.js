function dibujarLinea(colorito, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath(); // INICIAMO EL PROCESO DE LA LINEA
    lienzo.strokeStyle = colorito; // Color de la linea
    lienzo.moveTo(x_inicial,y_inicial); // Punto de inicio de la linea 
    lienzo.lineTo(x_final, y_final); // Punto final de la linea
    lienzo.stroke(); // CERRAMOS LA LIENA
    lienzo.closePath; //Termina DE DIBUJAR

}

function dibujoPorCLick()
{
    //alert("no me toques " + noLineas);
    var espacio = ancho/parseInt(txt_lines.value);
    var l;
    var linea = parseInt(txt_lines.value);
    var linea_2 = parseInt(txt_lines.value);
    var yI, xF;
    var color = "Black"
    for(l = 0 ; l < linea; l = l + 5)
    {
        yI = 0 + l;
        xF = 150 - l; 
        dibujarLinea(color, 150, yI, xF, 150);
    }

    for(l = 0 ; l < linea; l = l + 5)
    {
        yI = 300 - l;
        xF = 150 - l; 
        dibujarLinea(color, 150, yI, xF, 150);
    }

    for(l = 0 ; l < linea_2; l++)
    {
        yI = 0 + (l * espacio);
        xF = 0 + (l * espacio); 
        dibujarLinea(color,xF ,0, 300, yI);
    }

    dibujarLinea(color, 0, 0, 0, 300);
    dibujarLinea(color, 0, 300, 300, 300);
    dibujarLinea(color, 0, 0, 300, 0);
    dibujarLinea(color, 300, 0, 300, 300);
}

var d = document.getElementById("Canvas_dibujito");
var lienzo = d.getContext("2d");
var ancho = d.clientWidth;

var txt_lines = document.getElementById("txt_no.lineas");
var bttn_fire = document.getElementById("bttn_fuego")

bttn_fire.addEventListener("click", dibujoPorCLick);


//console.log(lienzo);

//dibujarLinea("Yellow", 0, 0, 1, 300)

