const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat" 

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value)
    mensaje.value = textoEncriptado
}

function encriptar(){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    StringEncriptada = StringEncriptada.toLoweCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][0])){
        StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }

}
}