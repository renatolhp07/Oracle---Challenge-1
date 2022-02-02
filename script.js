
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

var texto = document.getElementById('input-texto');
var caixaCodificado = document.getElementById('msg');
var botaoEncrypt = document.getElementById('btn-cripto');
var botaoDecrypt = document.getElementById('btn-descripto');
var botaoCopy = document.getElementById('btn-copy');
var textoResultado;
var textoEncrypted;
var textoDecrypted;

function capturaTexto(){

    console.log(texto.value);
}

function encrypt(){
    /*Há um bug aqui que apaga o valor do encrypt que deveria estar na caixa de texto ao lado
    assim que o valor aparece.
    Vou verificar quando tiver algum tempo livre...
    Bug corrigido, o problema era no type do botao que estava como 'submit' em vez de button no html*/
    
    var frase = texto.value;
    textoEncrypted = frase.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    textoResultado = textoEncrypted;
    console.log(textoResultado);
    caixaCodificado.value = textoResultado;
}

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

function decrypt(){

    var frase = texto.value;
    textoDecrypted = frase.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
    textoResultado = textoDecrypted;
    console.log(textoResultado);
    caixaCodificado.value = textoResultado;
}

function copyText(){

    let textoCopiado = caixaCodificado;
         textoCopiado.select();
         textoCopiado.setSelectionRange(0, 99999)
         document.execCommand('copy');
}

botaoEncrypt.onclick = encrypt;
botaoDecrypt.onclick = decrypt;
botaoCopy.onclick = copyText;

