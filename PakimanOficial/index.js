var imagenes = [];

imagenes[ "Cauchin" ] = "./PakimanesPng/vaca.png";
imagenes[ "Pokacho" ] = "./PakimanesPng/pollo.png";
imagenes[ "Tocinauro" ] = "./PakimanesPng/cerdo.png";

// var Cauchin = new Pakiman("Cauchin", 100, 30);
// var Pokacho = new Pakiman("Pokacho", 100,30);
// var Tocinauro = new Pakiman("Tocinauro", 100, 100);

// Cauchin.mostrarImagen();
// Pokacho.mostrarImagen();
// Tocinauro.mostrarImagen();

var colectionPakimanes = [];

colectionPakimanes.push(new Pakiman("Cauchin", 100, 30));
colectionPakimanes.push(new Pakiman("Pokacho", 100,30));
colectionPakimanes.push(new Pakiman("Tocinauro", 100, 100));

for(var index in colectionPakimanes){
    console.log(index)
    console.log(colectionPakimanes[index])
    colectionPakimanes[index].mostrarPakiman();
}