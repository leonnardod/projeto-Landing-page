var leonardo = window.document.getElementById("leonardo")
var samanta = window.document.getElementById("samanta")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")


function RolarParaDireita() {
leonardo.style = "display:none"
bruna.style = "display:flex"
setaDireita.style = "display:none"
setaEsquerda.style = "display:flex"; "margin-top: 70px"
}
function RolarParaEsquerda(){
    leonardo.style = "display: flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}
