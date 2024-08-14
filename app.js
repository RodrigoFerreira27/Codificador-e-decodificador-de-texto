function criptografar() {
    let texto = document.getElementById("textoUsuario").value 
    let nenhuma = document.getElementById("nenhuma")
    let digite = document.getElementById("digite")
    let imagemlupa = document.getElementById("lupa")
    let copiarTexto = document.getElementById("copiarTexto");
    let resultado = document.getElementById("resultado");

                if (/[A-ZáéíóúàèìòùâêîôûãõñäëïöüÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÑÄËÏÖÜ]/.test(texto)) {
                    alert("Por favor, insira apenas letras minúsculas e sem acento.");
                    return;
                }
        let textoCriptografado = texto
            .replace(/e/g, "enter") 
            .replace(/i/g, "imes") 
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat")
            
            if (texto.length != "0" ) {
            document.getElementById("textoUsuario").value = ""
            nenhuma.textContent = "Texto criptografado com sucesso!"
            digite.textContent = ""
            resultado.innerHTML = `<img src="imgs/resultado.jpg" alt="Imagem Resultado" style="width: 80%; height: auto;"><p>${textoCriptografado}</p>`
            copiarTexto.style.display = "block"
            imagemlupa.style.display = "none"; 

            } else {
            alert("Insira um texto.")
            
            }
    }
function descriptografar() {
    let texto = document.getElementById("textoUsuario").value 
    let nenhuma = document.getElementById("nenhuma")
    let digite = document.getElementById("digite")
    let imagemlupa = document.getElementById("lupa")
    let copiarTexto = document.getElementById("copiarTexto");
    let resultado = document.getElementById("resultado");

                if (/[A-ZáéíóúàèìòùâêîôûãõñäëïöüÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÑÄËÏÖÜ]/.test(texto)) {
                 alert("Por favor, insira apenas letras minúsculas e sem acento.");
                return;
                 }
        let textoCriptografado = texto     
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
            if (texto.length != "0" ) {
            document.getElementById("textoUsuario").value=""
            nenhuma.textContent = "Texto descriptografado com sucesso!"
            digite.textContent = ""
            resultado.innerHTML = `<img src="imgs/resultado.jpg" alt="Imagem Resultado" style="width: 80%; height: auto;"> <p>${textoCriptografado}</p>`
            copiarTexto.style.display = "block"
            imagemlupa.style.display = "none"; 

            } else {
            alert("Insira um texto.")
            }
}

function copiarParaClipboard() {
    let resultado = document.getElementById("resultado");
    let texto = resultado.getElementsByTagName("p")[0].textContent;
    
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error('Erro ao copiar o texto: ', err);
    });
}




