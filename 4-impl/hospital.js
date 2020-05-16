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


function cadastrarHospital() {
    //acessar as vagas da tela
    let vagasNormal = parseInt(document.getElementById("vagasNormal").value)
    let vagasCampanha = parseInt(document.getElementById("vagasCamp").value)

    //instancia 2 hospitais e preenche as vagas
    let h1 = new Hospital(vagasNormal, 0, "N", [])
    let h2 = new Hospital(vagasCampanha, 0, "C", [])

    console.log(h1)
    console.log(h2)

}