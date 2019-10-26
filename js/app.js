$("#btnCalc").click(function() {
  Calcular();
});

function Calcular() {
  var opcion = $("#moneda option:selected").html();

  var moneda = $("#moneda option:selected").val();
  var monto = $("#monto").val();
  var resultado;

  if (opcion == "Dolar") {
    resultado = parseInt(monto) * parseInt(moneda);

    $("#cotizacion").html(moneda + " Gs.");
    $("#mEntrante").html(monto + " Dolares.");
    $("#cambio").html(resultado + " Gs.");

    function Dolargs() {
      var vEntrante = $("#monto").html();

      var vResult = vEntrante * moneda;
      console.log(vResult);
    }
  }
  if (opcion == "Real") {
    resultado = parseInt(monto) * parseInt(moneda);
    $("#cotizacion").html(moneda + " Gs.");
    $("#mEntrante").html(monto + " Reales.");
    $("#cambio").html(resultado + " Gs.");
  }
  if (opcion == "Peso") {
    resultado = parseInt(monto) * parseInt(moneda);
    $("#cotizacion").html(moneda + " Gs.");
    $("#mEntrante").html(monto + " Pesos.");
    $("#cambio").html(resultado + " Gs.");
  }
}
