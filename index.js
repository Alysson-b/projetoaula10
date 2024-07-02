const display = document.querySelector('#ocultar');
const imgContainer = document.querySelector('.img img');

function ocultar() {
    imgContainer.style.display = 'none';
}

display.addEventListener('click', ocultar);