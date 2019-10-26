

$("#btnCalc").click(function () {
  Calcular();

});

function Calcular() {
/*   var opcion = document.getElementById("moneda"); //selecciona el select
  var seleccion = opcion.options[opcion.selectedIndex].text;
  var moneda = opcion.options[opcion.selectedIndex].value
  var monto = document.getElementById("monto").value;
  var resultado; */

  var opcion = $("#moneda option:selected").html();
  console.log(opcion); //selecciona el select;
  var seleccion = $("#moneda option:selected").html()
  var moneda = opcion.options[opcion.selectedIndex].value
  var monto = $("#monto").value();
  console.log(monto);
  var resultado;

  if (seleccion == "Dolar") {
    resultado = parseInt(monto) * parseInt(moneda);
    document.getElementById('cotizacion').innerHTML = moneda + " Gs.";
    document.getElementById('mEntrante').innerHTML = monto + " Dolares.";
    document.getElementById('cambio').innerHTML = resultado + " Gs.";



  function Dolargs(){
    var vEntrante = document.getElementById("monto");
    
    var vResult = vEntrante*document.getElementById("dolar").value;
    console.log(vResult);
  
  } if (seleccion == "Real") {
    resultado = parseInt(monto) * parseInt(moneda);
    document.getElementById('cotizacion').innerHTML = moneda + " Gs.";
    document.getElementById('mEntrante').innerHTML = monto + " Reales.";
    document.getElementById('cambio').innerHTML = resultado + " Gs.";

  } if (seleccion == "Peso") {
    resultado = parseInt(monto) * parseInt(moneda);
    document.getElementById('cotizacion').innerHTML = moneda + " Gs.";
    document.getElementById('mEntrante').innerHTML = monto + " Pesos.";
    document.getElementById('cambio').innerHTML = resultado + " Gs.";
  }



}


