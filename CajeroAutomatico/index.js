var caja = [];

caja.push(new Billete(50,3));
caja.push(new Billete(20,2));
caja.push(new Billete(10,3));

var peticionDinero = 210;
var billetesEntregados = [];
var contadorBilletes = 0;
var NoBilletesEntrega = 0;

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