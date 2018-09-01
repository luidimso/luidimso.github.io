function verificarVazio(){
  var inputs = document.getElementsByTagName("input");
  var auxiliar = 0;

  for(i=0; i<inputs.length; i++){
    if(inputs[i].value == ""){
      auxiliar = 1;
    }
  }

  if(auxiliar == 1){
    document.getElementById("resultado").innerHTML = "Alguns campos não estão preechidos";
  } else{
    verificarEmail();
  }
}

function verificarEmail(){
  var email = document.getElementById("email").value;

  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
    document.getElementById("resultado").innerHTML = "E-mail inválido";
  } else if(document.getElementById("email").value != document.getElementById("confirmar_email").value){
    document.getElementById("resultado").innerHTML = "Os e-mails não confirmam";
  } else{
    calcular();
  }
}

function calcular(){
  var data_in = new Date(document.getElementById("data_in").value);
  var data_out = new Date(document.getElementById("data_out").value);
  var milesimos = data_out.getTime() - data_in.getTime();
  var dias = Math.ceil(milesimos / (1000 * 3600 * 24));

  var diaria = 0.00;
  var quartos = parseInt(document.getElementById("quantidade").value);
  var hospedes = parseInt(document.getElementById("numero").value);

  if(hospedes <= 0){
    document.getElementById("resultado").innerHTML = "Informe a quantidade de hóspedes";
  } else if(hospedes == 1){
    diaria = 149 * quartos * dias;
    document.getElementById("resultado").innerHTML = "O valor final da diária: " + diaria;
  } else if(hospedes > 4){
    document.getElementById("resultado").innerHTML = "Número de hóspedes acima do permitido";
  } else{
    diaria = 149 * quartos * dias + 60 * hospedes * dias;
    document.getElementById("resultado").innerHTML = "O valor final da diária: " + diaria;
  }
}
