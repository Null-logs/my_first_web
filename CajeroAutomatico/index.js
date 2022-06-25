class Billete{
    
    constructor(valor, cantidad){
        this.valor = valor;
        this.cantidad = cantidad;
    }

}

function overlayHTML(peticionDinero){

    var outpuATM = document.getElementById("outpuATM");

    if( peticionDinero > 0){
        outpuATM.innerHTML = "NO HAY DINERO DX"
    }else{
        outpuATM.innerHTML = "Billetes entregados <hr />";

        for(var object of billetesEntregados){
            if(object.cantidad > 0){
                outpuATM.innerHTML = outpuATM.innerHTML + object.cantidad + " Biiletes entregados de $" + object.valor + "<br />";
            }
        }
    }

}

function requestATM(){

    var numDinero = document.getElementById("numDinero");
    peticionDinero = numDinero.value;

    console.log(peticionDinero);

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

var btnExtraerDInero = document.getElementById("btnExtraerDInero");
    btnExtraerDInero.addEventListener("click",requestATM);

