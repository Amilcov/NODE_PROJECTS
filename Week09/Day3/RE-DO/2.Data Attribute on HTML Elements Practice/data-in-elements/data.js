document.addEventListener('DOMContentLoaded', event => {

    const btnAdd = document.getElementById('add');
    btnAdd.addEventListener('click', event => {
        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;
        const item = `<li data-type=${type}>${name}</li>`
        const ul = document.getElementById('shopping-list');

        ul.insertAdjacentHTML('beforeend',item);
        event.preventDefault();
    })

})