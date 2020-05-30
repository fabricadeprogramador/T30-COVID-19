class Hospital {
    constructor(vagas, ocupados, tipo, pacientes) {
        this.vagas = vagas;
        this.ocupados = ocupados;
        this.tipo = tipo;
        this.pacientes = pacientes
    }

    adicionarPaciente(p){
        console.log("Cadastrando ..." + p.nome)
        this.pacientes.push(p)
    }

    calcularPorcentagemLotacao(){
        let numeroVagas =  this.vagas 
        let numPacientes = this.pacientes.length
        return numPacientes * 100 / numeroVagas
    }
}

class Paciente {
    constructor(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }
}



var h1;
var h2;

//RF02 , RF07
function cadastrarHospital() {
    //acessar as vagas da tela
    let vagasNormal = parseInt(document.getElementById("vagasNormal").value)
    let vagasCampanha = parseInt(document.getElementById("vagasCamp").value)

    //instancia 2 hospitais e preenche as vagas
     h1 = new Hospital(vagasNormal, 0, "N", [])
     h2 = new Hospital(vagasCampanha, 0, "C", [])

    console.log(h1)
    console.log(h2)

}

//RF01, RF06
function adicionarPaciente(){
    //#1 - Leitura
    //Acessar os dados do form
    let nome =  document.getElementById("nome").value
    //Acessa o sexo radio checked
    let sexo = document.querySelector("input[type=radio]:checked").value
    //Instancia um objeto contendo os dados do form
    let p =  new Paciente (nome, sexo)

    //# 2 processamento
    //Adicionando paciente no hospital
    let htmlPaciente =  `<div>${p.nome} | ${p.sexo}</div>`;

    let htmlTituloHosp1 = "Hospital 1"
    let htmlTituloHosp2 = "Hospital Campanha"

    
  //#3 Saída Exibir na tela
    if (h1.calcularPorcentagemLotacao()<70) {
        h1.adicionarPaciente(p)
        tituloHosp1.innerHTML = htmlTituloHosp1 +  "(" + h1.calcularPorcentagemLotacao()+ "%)"
        listaHosp1.innerHTML += htmlPaciente
    }else {
        h2.adicionarPaciente(p)
        tituloHosp2.innerHTML = htmlTituloHosp2 + "(" + h2.calcularPorcentagemLotacao()+"%)"
        listaHosp2.innerHTML += htmlPaciente
    }
   
}

//RF10 - Implementar dia 30/05



