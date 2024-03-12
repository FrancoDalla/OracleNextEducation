function testFunction(){
    alert('PALA');
}

function buttonTest(){
    alert('ANCHA');
}

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
    buttonCopy.className="button copyButton";
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

function encrypt(text){
    /*let reemplazo = {
        a:'av',
        e:'ev',
        i:'iv',
        o:'ov',
        u:'uv'
    };
    var encryptText = text.replace(/[aeiou]/gi, reemplazo);*/
    let encryptText = text
        .replaceAll('a', 'av')
        .replaceAll('e', 'ev')
        .replaceAll('i', 'iv')
        .replaceAll('o', 'ov')
        .replaceAll('u', 'uv');
    alert(encryptText);
}

function mostrarEnPantalla(){
    let message = document.getElementById("mensaje").value;
    let img = document.getElementById('monigote');
    img.style.visibility = 'hidden';
    document.getElementById('textBox').className = 'cajaTextoChange';
    crearBoton("botonCopiar");
    let texto = document.getElementById('muestraTexto');
    texto.className = "textoMuestra";
    texto.innerHTML = message;    
    alert(message);
}
