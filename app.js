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

function mostrarEnPantalla(){
    let message = document.getElementById("mensaje").value;
    let img = document.getElementById('monigote');
    img.style.visibility = 'hidden';
    document.getElementById('textBox').className = 'cajaTextoChange';
    let texto = document.getElementById('muestraTexto');
    texto.className = "textoMuestra";
    texto.innerHTML = message;
    alert(message);
}