class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }
    
    hablar(){
        alert("soy" + this.nombre)
    }
    mostrarPakiman(){
        document.body.appendChild(this.imagen);
        document.write("<strong> <br />" + "Nombre: " + this.nombre + "</strong>");
        document.write("<br />" + "Nombre: " + this.vida);
        document.write("<br />" + "Nombre: " + this.ataque);
        document.write("<hr />");
    }
}
 