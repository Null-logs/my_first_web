
function dibujar(valor,x,y){

    if(imagenesBilletes["50"].cargaOk && valor == 50){
        papel.drawImage(imagenesBilletes["50"].imagen, x, y);
    }

    if(imagenesBilletes["10"].cargaOk && valor == 10){
        papel.drawImage(imagenesBilletes["10"].imagen, x, y);
    }

    if(imagenesBilletes["20"].cargaOk && valor == 20){
        papel.drawImage(imagenesBilletes["20"].imagen, x, y);
    }
}

function manufacturaDeJsons(imageName){
    var valorBillete = imageName;
    var imageName = {
        url: "./PakimanesPng/" + imageName + ".png",
        cargaOk: false
    }
    
    imageName.imagen = new Image();
    imageName.imagen.src = imageName.url;
    imageName.nombre = valorBillete;

    return imageName;
}

function overlayHTML(peticionDinero){

    var outpuATM = document.getElementById("outpuATM");

    if( peticionDinero > 0){
        outpuATM.innerHTML = "NO HAY DINERO DX"
    }else{
        outpuATM.innerHTML = "Billetes entregados <hr />";
        var x = 0;
        for(var object of billetesEntregados){
            if(object.cantidad > 0){
                outpuATM.innerHTML = outpuATM.innerHTML + object.cantidad + " Billetes entregados de $" + object.valor + "<br />";
            }

            for(let i = 0; i<object.cantidad; i++){
                dibujar(object.valor,x,x);
                x+=15;
                console.log(object.valor);
                console.log(typeof(object.valor));
            }
        }
    }
}


function getUnderValueBox(){
    
    let valores = [];

    for(let objetoCaja of caja){
        valores.push(objetoCaja.valor);
    }

    let menor = valores[0]; 
    // console.log(menor);

    for(let indexValores = 1; indexValores<valores.length; indexValores++){
        if(menor > valores[indexValores]){
            menor = valores[indexValores];
        }
        // console.log(menor);
    }

    // console.log(menor);

    return menor;    
}


function requestATM(){

    var numDinero = document.getElementById("numDinero");
    peticionDinero = numDinero.value;

    // console.log(peticionDinero);
    // console.log(getUnderValueBox());



    for (var iterador in caja) {

        if (peticionDinero > 0){

            NoBilletesEntrega = Math.floor(peticionDinero/caja[iterador].valor)
                
            if(NoBilletesEntrega > caja[iterador].cantidad){
                contadorBilletes = caja[iterador].cantidad;
            
            }else{
                contadorBilletes = NoBilletesEntrega;
            
            }
            billetesEntregados.push(new Billete(caja[iterador].valor,contadorBilletes));
            peticionDinero = peticionDinero - (caja[iterador].valor*contadorBilletes);
        }
    }

    overlayHTML(peticionDinero);
}



var caja = [];
    caja.push(new Billete(50,3));
    caja.push(new Billete(20,2));
    caja.push(new Billete(10,3));


var peticionDinero;
var billetesEntregados = [];
var contadorBilletes = 0;
var NoBilletesEntrega = 0;

var vp = document.getElementById("villaPLatzi");
var papel = vp.getContext("2d");

var btnExtraerDInero = document.getElementById("btnExtraerDInero");
    btnExtraerDInero.addEventListener("click",requestATM);

var imagenesBilletes = [];
imagenesBilletes[ "50" ] = manufacturaDeJsons("50");
imagenesBilletes[ "10" ] = manufacturaDeJsons("10");
imagenesBilletes[ "20" ] = manufacturaDeJsons("20");


imagenesBilletes["50"].imagen.addEventListener("load", function(){
    imagenesBilletes["50"].cargaOk = true;
});

imagenesBilletes["10"].imagen.addEventListener("load", function(){
    imagenesBilletes["10"].cargaOk = true;
});

imagenesBilletes["20"].imagen.addEventListener("load", function(){
    imagenesBilletes["20"].cargaOk = true;
});

