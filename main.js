document.getElementById("calcular").addEventListener("click", function(){

  document.getElementById("erro").style.visibility="hidden"
  var horasDiarias = parseInt(document.getElementById("valor-1").value);
  var diasEfetivos = parseInt(document.getElementById("valor-2").value);
  var diasFerias = parseInt(document.getElementById("valor-3").value);
  var valorProjeto = parseInt(document.getElementById("valor-4").value);
  
  if (isNaN(horasDiarias)) {
      document.getElementById("erro").style.visibility="visible" 
  }
  else if (isNaN(diasEfetivos)) {
      document.getElementById("erro").style.visibility="visible" 
  }
  else if(isNaN(diasFerias)) {
      document.getElementById("erro").style.visibility="visible" 
  }
  else if(isNaN(valorProjeto)) {
      document.getElementById("erro").style.visibility="visible" 
  }
  else {
      const result = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) )
      const valorHora = parseInt(result).toFixed(2);
      document.getElementById("resultado").innerHTML = `R$ ${valorHora} p/ hora`;
  }
});


