function date() {
    var currentDate = new Date();
    var content = document.getElementById('date');
    content.textContent += " " + currentDate.getFullYear();
}