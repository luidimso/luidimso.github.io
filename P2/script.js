function checarVazio(){
  var inputs = document.getElementsByTagName('input');
  var auxiliar = 0;

  for(i = 0; i < inputs.length; i++){
    if(inputs[i].getAttribute('type') == 'text' || inputs[i].getAttribute('type') == 'password'){
      inputs[i].style.borderColor = "#a9a9a9";
      if(inputs[i].value == ""){
        auxiliar = 1;
        inputs[i].style.borderColor = "lightCoral";
      }
    }
  }

  if(auxiliar == 1){
    alert("Preencha todos os campos!")
  }
}

function apenasNumero(){
  var regex = new RegExp(/^[0-9]+$/g);
  var cpf = document.getElementById("cpf1").value + document.getElementById("cpf2").value;
  var cep = document.getElementById("cep1").value + document.getElementById("cep2").value;

  if(!cpf.match(regex) && cpf != ""){
    alert("Apenas números nos campos CPF");
  }

  if(!cep.match(regex) && cep != ""){
    alert("Apenas números nos campos CEP");
  }

  if(!document.getElementById("rg").value.match(regex) && document.getElementById("rg").value != ""){
    alert("Apenas números no campo RG");
  }

  if(!document.getElementById("numero").value.match(regex) && document.getElementById("numero").value != ""){
    alert("Apenas números no campo Número");
  }
}

function apenasLetra(){
  var regex = new RegExp(/^[a-zA-Z/\s]+$/g);

  if(!document.getElementById("nome").value.match(regex) && document.getElementById("nome").value != ""){
    alert("Apenas letras nos campos Nome");
  }

  if(!document.getElementById("sobrenome").value.match(regex) && document.getElementById("sobrenome").value != ""){
    alert("Apenas letras nos campos Sobrenome");
  }

  if(!document.getElementById("bairro").value.match(regex) && document.getElementById("bairro").value != ""){
    alert("Apenas letras no campo Bairro");
  }

  if(!document.getElementById("cidade").value.match(regex) && document.getElementById("cidade").value != ""){
    alert("Apenas letras no campo Cidade");
  }
}

function verificarEmail(){
  if(document.getElementById("email").value != document.getElementById("confirmar_email").value){
    alert("Os e-mails não estão iguais");
  }
}

function verificarSenha(){
  if(document.getElementById("senha").value != document.getElementById("confirmar_senha").value){
    alert("As senhas não estão iguais");
  }
}

function verificarCheckbox(){
  var checkboxes = document.getElementsByName("aprender");
  var auxiliar = 0;

  for(i=0; i<checkboxes.length; i++){
    if(checkboxes[i].checked){
      auxiliar++;
    }
  }

  if(auxiliar == 0){
    alert("Escolha ao menos uma opção no que deseja aprender");
  }
}
