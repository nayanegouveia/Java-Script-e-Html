function funcao() {

    var vet = []
    for (var i = 0; i < 5; i++) {
        var objeto = {}
        // coloca os dados no objeto
        objeto.codigo = Number(prompt("Codigo"))
        objeto.nome = prompt("Nome")
        objeto.qtde = Number(prompt("Qtde"))
        objeto.preco = Number(prompt("Preço"))
        // coloca objeto no vetor 
        vet.push(objeto)
    }
    var acm = 0
    for(i = 0; i < 5; i++) {
        acm = vet[i].preco+acm
    }
    alert(acm)
}

