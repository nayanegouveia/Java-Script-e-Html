function funcao() {

    var vet = []
    for (var i = 0; i < 3; i++) {
        var objeto = {}
        // coloca os dados no objeto
        objeto.salario = Number(prompt("Salario: "))
        objeto.idade = prompt("Idade: ")
        objeto.filhos = Number(prompt("Quantidade de Filhos: "))
        objeto.sexo = Number(prompt("Sexo: "))
        // coloca objeto no vetor 
        vet.push(objeto)
    }
    var mediasalrio = 0
    for(var i = 0; i < 3; i++) {
        mediasalario = mediasalario + vet[i].salario
    }
    
    var mediasalario = 0
    for(var i=0;i<3;i++){
        mediafilho = mediafilho + vet[i].filhos
    }

    var maiorsalario = 0
    for(var i=0;i<3; i++){
        if (maiorsalario < vet[i].salario){
            maiorsalario = vet[i].salario
        }
    }
    var qtde = 0
    for(var i=0;i<3; i++){
    if((vet[i].sexo == "F") && (vet[i].salario > 1000)){
        qtde++
    
    }

}

    alert("A media de salarios é de :"+ mediasalario /3)
    alert("A media de filhos é de : " + mediafilho / 3)
    alert("O maior salario é: "+ maiorsalario)
    alert("O percentual de: "+ (qtde/3)*100);
}

