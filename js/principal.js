var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var trPaciente = document.querySelector(".paciente:first-child");

var tdPeso = trPaciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = trPaciente.querySelector(".info-altura")
var altura = tdAltura.textContent;

var podeCalcularImc = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    podeCalcularImc = false;
    tdPeso.textContent = "Peso Inválido";
}

if(altura <=0 || altura >= 3.0){
    console.log("Altura Inválida");
    podeCalcularImc = false;
    tdAltura.textContent = "Altura Inválida";
}

tdImc = trPaciente.querySelector(".info-imc");
if(podeCalcularImc){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Impossível calcular";
}
