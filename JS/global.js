
/* Para el navsidebar responsive */
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos los elementos
  const btnOpenMenu = document.querySelector('.button-menu');
  const btnCloseMenu = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  // Función para abrir el menú
  const openMenu = () => {
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    // Esto evita que la página de fondo se pueda hacer scroll mientras el menú está abierto
    document.body.style.overflow = 'hidden'; 
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    // Devolvemos el scroll a la página normal
    document.body.style.overflow = ''; 
  };

  // Asignamos los eventos de clic
  if (btnOpenMenu) {
    btnOpenMenu.addEventListener('click', openMenu);
  }

  if (btnCloseMenu) {
    btnCloseMenu.addEventListener('click', closeMenu);
  }

  // Permite cerrar el menú tocando la zona oscura fuera de él
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }
}); 





/* Código para funcionamiento de los combobox de selección de equipo */
const input = document.getElementById("combo-input");
const lista = document.getElementById("combo-lista");
const opciones = lista.querySelectorAll("li");

/* Input para mostrar la lista cuando le demos click al input */
input.addEventListener("focus", () =>{lista.classList.add("activa")});


opciones.forEach(opcion=>{
    opcion.addEventListener("click", () => {
        input.value = opcion.textContent;
        lista.classList.remove("activa");
    });
});

document.addEventListener("click", (evento)=>{
    if(!input.contains(evento.target)&& !lista.contains(evento.target)){
        lista.classList.remove("activa");
    }
});





