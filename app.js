function desencriptarTexto(){
    alert('asi es, esto deberia mostrar el texto desencriptado');
}

function encriptarTexto(){
    alert('Esto deberia mostrar el texto encriptado');

}

function crearBoton(divName){
    let auxDiv = document.getElementById(divName);
    let buttonCopy = document.createElement("BUTTON");
    let text = document.createTextNode("COPIAR");
    buttonCopy.className="copyButton";
    buttonCopy.appendChild(text);
    buttonCopy.addEventListener("click", copyFunction);
    auxDiv.appendChild(buttonCopy);
    crearBoton = fufufu;
}

function copyFunction(){
    var copyText = document.getElementById("muestraTexto");
    navigator.clipboard.writeText(copyText.innerHTML);
}

function fufufu(){

}

function encrypt(){
    let text = document.getElementById("mensaje").value;
    let encryptText = text
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    mostrarEnPantalla(encryptText);
}

function desEncrypt(){
    let text = document.getElementById("mensaje").value;
    let desencryptText = text
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat','u');
    mostrarEnPantalla(desencryptText);
}

function mostrarEnPantalla(message){
    let img = document.getElementById('monigote');
    img.style.visibility = 'hidden';
    document.getElementById('textBox').className = 'cajaTextoChange';
    crearBoton("botonCopiar");
    let texto = document.getElementById('muestraTexto');
    texto.className = "textoMuestra";
    texto.innerHTML = message;    
}
