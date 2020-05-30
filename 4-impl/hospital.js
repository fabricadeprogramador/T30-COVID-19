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
    if (h1.calcularPorcentagemLotacao()<70) {
        h1.adicionarPaciente(p)
        console.log("Cadastrado no H1")
         //#3 Saída Exibir na tela
        listaHosp1.innerHTML += `<div>${p.nome} | ${p.sexo}</div>`
    }else {
        h2.adicionarPaciente(p)
        console.log("Cadastrado no H2")
        listaHosp2.innerHTML += `<div>${p.nome} | ${p.sexo}</div>`
    }

   
    
   
}

//RF10 - Implementar dia 30/05



