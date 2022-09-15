const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const objeto2 = {nome: "eu",profissao: "estudante"}

const caixaAlta = (objetoCaixaBaixa) =>{
    let objetoModificado = {};
    for (info in objetoCaixaBaixa){
        objetoModificado[info]= objetoCaixaBaixa[info].toUpperCase();
    }
    console.log(objetoModificado)
}
caixaAlta(objeto)

const textoCorrido = (objetoTexto) =>{
    let textoCorrendo = " ";
    for(texto in objetoTexto){
        textoCorrendo = textoCorrendo+objetoTexto[texto]+" ";
    }
    console.log(textoCorrendo)
}

textoCorrido(objeto)

const callbackFuncoes = (objetoCallback, funcao) =>{
    funcao(objetoCallback);
}

callbackFuncoes(objeto2,caixaAlta)
callbackFuncoes(objeto2,textoCorrido)