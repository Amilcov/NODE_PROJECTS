window.addEventListener("DOMContentLoaded", (event) => {
    const idInput = document.getElementById('inputIdText');
    const idDiv = document.getElementById('divIdMirror');

    idDiv.innerText = '';
    idInput.addEventListener('input', (eventInput) => {
        idDiv.innerText += eventInput.data;
    })
})