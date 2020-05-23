class Hospital {
    constructor(vagas, ocupados, tipo, pacientes) {
        this.vagas = vagas;
        this.ocupados = ocupados;
        this.tipo = tipo;
        this.pacientes = pacientes
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
    //Acessar os dados do form
    let nome =  document.getElementById("nome").value
    //Acessa o sexo radio checked
    let sexo = document.querySelector("input[type=radio]:checked").value
    //Instancia um objeto contendo os dados do form
    let p =  new Paciente (nome, sexo)
    //imprimindo no console 
   // console.log(p)
    //Adicionando paciente no hospital
    if (h1.pacientes.length < h1.vagas * 0.7) {
        h1.pacientes.push(p)
        console.log("Cadastrado no H1")
    }else {
        h2.pacientes.push(p)
        console.log("Cadastrado no H2")
    }
}

//RF10 - Implementar dia 30/05



