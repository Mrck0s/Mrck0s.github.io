/*Codigo para que al presionar un elemento del nav, la pagina se desplace hasta esa parte*/ 
const navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); 
    
    const targetId = link.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/*Codigo del menu hamburguesa para dispositivos móviles*/
const abrir = document.querySelector('.abrir-menu');
const cerrar = document.querySelector('.cerrar-menu');
const nav = document.querySelector('.nav');

abrir.addEventListener('click', () => {
  nav.classList.add('visible');
});

cerrar.addEventListener('click', () => {
  nav.classList.remove('visible');
});
