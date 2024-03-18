const textoInicial = document.querySelector(".textInicio");
let textoFinal = document.getElementById("campoSaida");    
let semMensagem = document.getElementById('mensagemNaoEncontrada');
let btcopiar = document.getElementById("copiaMsg");
    

let gerarcodigo = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],    
    ["u","ufat"],

];


function botaoCrip() {
    const textoCriptografado = cripitografar(textoInicial.value);    
    textoFinal.value = textoCriptografado;    
    textoInicial.value = '';  
    semMensagem.style.display = "none";    
    btcopiar.style.display = "block";

}

function botaoDescrip() {    
    const textoDesCriptografado = desCripitografar(textoInicial.value);        
    textoFinal.value = textoDesCriptografado;    
    textoInicial.value = '';      
    btcopiar.style.display = "block";
    
}

function botaocopiar() {
    let copiarTexto = textoFinal.value;
    window.navigator.clipboard.writeText(copiarTexto); 
    alert("Texto copiado com Sucesso!!")   
}


function cripitografar(textoCriptografado) {
    textoCriptografado = textoCriptografado.toLowerCase();
    for (let i=0; i<gerarcodigo.length;i++) {
        if(textoCriptografado.includes(gerarcodigo[i][0])) {
            textoCriptografado = textoCriptografado.replaceAll(gerarcodigo[i][0], gerarcodigo[i][1]);
        }
    }
     return textoCriptografado;    
}

function desCripitografar(textoDesCrip) {    
    for (let i=0; i<gerarcodigo.length;i++) {
        if(textoDesCrip.includes(gerarcodigo[i][0])) {
            textoDesCrip = textoDesCrip.replaceAll(gerarcodigo[i][1], gerarcodigo[i][0]);
        }
    }
     return textoDesCrip;
    
}

