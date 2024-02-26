const campo_texto = document.querySelector("#texto_encriptado")
const campo_mensaje = document.querySelector("#campo_mensaje")

// TextAreas
const encryptText = document.querySelector(".user-text");
const copyText = document.querySelector(".inputCopy");

// Result Button
const textFound = document.querySelector(".text-found");
const notFound = document.querySelector(".not-found");


const matriz_code= [
    ["e","enter"], //indice 0
    ["i","imes"], // indice 1
    ["a","ai"], // indice 2
    ["o","ober"], // indice 3
    ["u","ufat"], // indice 4

];

function btnEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    

    
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++) {
        
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1])
        
            
        }
        
    }
    return fraseEncriptada;
    

}

const matriz_inversa= [
    ["enter","e"], //indice 0
    ["imes", "i"], // indice 1
    ["ai","a"], // indice 2
    ["ober","o"], // indice 3
    ["ufat","u"], // indice 4

];



function btnDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
    

    
}

function desencriptar(frase){
    for (let i = 0; i < matriz_inversa.length; i++) {
        
        if (frase.includes(matriz_inversa[i][0])) {
            frase = frase.replaceAll(matriz_inversa[i][0], matriz_inversa[i][1])
        
            
        }
        
    }
    return frase;
    

}
