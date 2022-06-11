function dibujar_Linea(colorcito, x_ini, y_ini, x_fin, y_fin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorcito;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath;
}

function dibujo_Por_Click()
{
    var tamano_canvas = parseInt(el_Canvas.value);
    d.width = tamano_canvas;
    d.height = tamano_canvas;
    var linea = parseInt(txt_lineas.value);
    var mitad_El_Canvas = tamano_canvas/2;
    var separaion; 
    var i;
    separaion = mitad_El_Canvas/linea;


    dibujar_Linea(color.value, 0, 0, 0, el_Canvas.value);
    dibujar_Linea(color.value, 0, el_Canvas.value, el_Canvas.value, el_Canvas.value);
    dibujar_Linea(color.value, 0, 0, el_Canvas.value, 0);
    dibujar_Linea(color.value, el_Canvas.value, 0, el_Canvas.value, el_Canvas.value);

    console.log(lado.value);

    if (lado.value=="Estrella") // graficamos estrella
    {

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas, i*separaion, mitad_El_Canvas-(i*separaion), mitad_El_Canvas);
        }

        for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, mitad_El_Canvas, i*separaion, mitad_El_Canvas+(i*separaion), mitad_El_Canvas);
        }

        for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, i*separaion, mitad_El_Canvas, mitad_El_Canvas, mitad_El_Canvas+(i*separaion));
        }
        
     /*   for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, i*separaion, mitad_El_Canvas, mitad_El_Canvas, mitad_El_Canvas+(i*separaion));
         }*/

        for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, tamano_canvas-(i*separaion), mitad_El_Canvas, mitad_El_Canvas, mitad_El_Canvas+(i*separaion));
        }
    }

    

    if(lado.value == "Circulo")
    {
        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas -(i*separaion), 0, 0, i*separaion );
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas + (i*separaion), 0, tamano_canvas,  i*separaion);
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, 0, mitad_El_Canvas + (i*separaion), i*separaion, tamano_canvas);
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas + (i*separaion), tamano_canvas, tamano_canvas, tamano_canvas - (i*separaion));
        }

    
    }

    if(lado.value == "Estrella con circulo")
    {
        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas -(i*separaion), 0, 0, i*separaion );
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas + (i*separaion), 0, tamano_canvas,  i*separaion);
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, 0, mitad_El_Canvas + (i*separaion), i*separaion, tamano_canvas);
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas + (i*separaion), tamano_canvas, tamano_canvas, tamano_canvas - (i*separaion));
        }

        for(i = 0; linea >= i; i++)
        {  
            dibujar_Linea(color.value, mitad_El_Canvas, i*separaion, mitad_El_Canvas-(i*separaion), mitad_El_Canvas);
        }

        for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, mitad_El_Canvas, i*separaion, mitad_El_Canvas+(i*separaion), mitad_El_Canvas);
        }

        for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, i*separaion, mitad_El_Canvas, mitad_El_Canvas, mitad_El_Canvas+(i*separaion));
        }

        for(i = 0; linea >= i; i ++)
        {
            dibujar_Linea(color.value, tamano_canvas-(i*separaion), mitad_El_Canvas, mitad_El_Canvas, mitad_El_Canvas+(i*separaion));
        }
    }


}

function clearCambas ()
{
    d.width=d.width;
}


//obtencion de los objetos
var txt_lineas = document.getElementById("txt_no.lineas"); //número de lineas
var color = document.getElementById("clr_color");
var lado = document.getElementById("lugarcito");
var el_Canvas = document.getElementById("tamanito");
var bttn_fuego_valor = document.getElementById("bttn_fuego"); //boton que grafica
var d = document.getElementById("canvas_dibujito");
var bttn_clear = document.getElementById("bttn_clear");
var lienzo = d.getContext("2d");
var ancho = d.clientWidth; // obtiene el width "real del objeto"
//var tamano_canvas = parseInt(el_Canvas.value);

bttn_fuego_valor.addEventListener("click", dibujo_Por_Click);
bttn_clear.addEventListener("click", clearCambas, false);//pendiente




//console.log(d);



