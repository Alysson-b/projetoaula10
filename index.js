const display = document.querySelector('#ocultar');
const imgContainer = document.querySelector('.img img');

function alternarVisibilidade() {
    if (imgContainer.style.display === 'none') {
        imgContainer.style.display = 'flex';
    } else {
        imgContainer.style.display = 'none';
    }
}

display.addEventListener('click', alternarVisibilidade);