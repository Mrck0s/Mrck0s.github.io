// seleccionamos el formulario
const form = document.querySelector('.contacto-form');

// seleccionamos los campos del formulario
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');

// seleccionamos los elementos de error
const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorMensaje = document.getElementById('error-mensaje');

// ocultamos los mensajes de error al cargar la página
ocultarError(errorNombre);
ocultarError(errorEmail);
ocultarError(errorMensaje);

// función para validar el formulario
function validarFormulario(event) {
  event.preventDefault();

  if (nombre.value.trim() === '') {
    mostrarError(errorNombre, 'Por favor, ingresa tu nombre.');
  } else {
    ocultarError(errorNombre);
  }

  if (email.value.trim() === '' || !validarEmail(email.value.trim())) {
    mostrarError(errorEmail, 'Por favor, ingresa un email válido.');
  } else {
    ocultarError(errorEmail);
  }

  if (mensaje.value.trim() === '') {
    mostrarError(errorMensaje, 'Por favor, ingresa un mensaje.');
  } else {
    ocultarError(errorMensaje);
  }

  if (nombre.value.trim() !== '' && email.value.trim() !== '' && validarEmail(email.value.trim()) && mensaje.value.trim() !== '') {
    form.submit();
    nombre.value = '';
    email.value = '';
    mensaje.value = '';
  }
}
// función para validar el formato del email
function validarEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// función para mostrar los mensajes de error
function mostrarError(elemento, mensaje) {
  elemento.style.display = 'block';
  elemento.innerHTML = mensaje;
}

// función para ocultar los mensajes de error
function ocultarError(elemento) {
  elemento.style.display = 'none';
}

// agregamos el evento submit al formulario
form.addEventListener('submit', validarFormulario);

