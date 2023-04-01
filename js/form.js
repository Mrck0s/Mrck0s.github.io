const form = document.querySelector('.contacto-form');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nombre: nombre.value,
        email: email.value,
        mensaje: mensaje.value
};

    const response = await fetch('/send', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);
});
