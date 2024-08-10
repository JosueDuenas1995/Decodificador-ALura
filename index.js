function validarCaracteres() {
  const textarea = document.getElementById('cajaDeTexto');
  const warning = document.getElementById('warning');
  const texto = textarea.value;

  // Regex para permitir solo letras minúsculas y sin acentos
  const regex = /^[a-z\s]*$/;

  if (!regex.test(texto)) {
      warning.style.display = 'flex';
      // Mostrar alerta
      Swal.fire({
        title: 'Error!',
        text: 'No letras mayuscculas o caracteres especiales',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      // Remover los caracteres inválidos sin hacer reemplazo automático
      textarea.value = texto.replace(/[^a-z\s]/g, '');
  } else {
      warning.style.display = 'none';
  }
}

// Función para encriptar texto
function encriptarTexto() {
  const textarea = document.getElementById('cajaDeTexto');
  let texto = textarea.value;

  // Encriptación básica: reemplazar letras según un patrón
  let textoEncriptado = texto.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
                             
  document.getElementById('encrip-text').innerText = textoEncriptado;
  document.getElementById('munieco').style.display = 'none'; // Ocultar imagen
  document.getElementById('encrip-text').style.display = 'block'; // Mostrar texto
}

// Función para desencriptar texto
function desencriptarTexto() {
  const textarea = document.getElementById('cajaDeTexto');
  let texto = textarea.value;

  // Desencriptación básica: revertir el patrón de reemplazo
  let textoDesencriptado = texto.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
  
  document.getElementById('encrip-text').innerText = textoDesencriptado;
  document.getElementById('munieco').style.display = 'none'; // Ocultar imagen
  document.getElementById('encrip-text').style.display = 'block'; // Mostrar texto
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
  const textoEncriptado = document.getElementById('encrip-text').innerText;
  navigator.clipboard.writeText(textoEncriptado).then(() => {
    Swal.fire({
      title: "Copiado!",
      text: "Texto Copiado en el Portapapeles!",
      icon: "success"
    });
  });
}

// Función para intercambiar el contenido de las cajas de texto
function switchFields() {
  const textarea = document.getElementById('cajaDeTexto');
  const encriptado = document.getElementById('encrip-text');
  
  let temp = textarea.value;
  textarea.value = encriptado.innerText;
  encriptado.innerText = temp;

  if (encriptado.innerText === "") {
      document.getElementById('munieco').style.display = 'block';
      encriptado.style.display = 'none';
  } else {
      document.getElementById('munieco').style.display = 'none';
      encriptado.style.display = 'block';
  }
}

// Función para resetear los campos
function resetFields() {
  document.getElementById('cajaDeTexto').value = '';
  document.getElementById('encrip-text').innerText = 'Ningún mensaje fue \n encontrado';
  document.getElementById('munieco').style.display = 'block';
  document.getElementById('encrip-text').style.display = 'block';
}
