function date() {
    var currentDate = new Date();
    var content = document.getElementById('date');
    content.textContent += " " + currentDate.getFullYear();
}

date();

function showModal() {
    var content = document.getElementById('contenido');
    content.style.display = 'block';
}

function ocultarModal() {
    var content = document.getElementById('contenido');
    content.style.display = 'none';
}