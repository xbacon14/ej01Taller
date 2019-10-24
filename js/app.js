

$("#btnCalcular").click(function(ev) {
  Calcular();

});

function Calcular(){
  var moneda = $('option').hasClass("selected").getValue();
  console.log(moneda);
  
  }

  function Dolargs(){
    var vEntrante = document.getElementById("monto");
    var vResult = vEntrante*document.getElementById("dolar").value;
    console.log(vResult);
  
  }
  
/* function Realgs(){
  var vEntrante = (document.);

}
function Pesogs(){
  var vEntrante = (document.);

} */