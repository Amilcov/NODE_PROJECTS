window.addEventListener('DOMContentLoaded', event => {
      
    const btnAdd = document.querySelector('#add');
    btnAdd.addEventListener('click', event => {
        event.preventDefault();
        const itemName = document.querySelector('#name');
        const itemCateg = document.querySelector('#type')
        const ul = document.getElementById('shopping-list');
        const liAdd = document.createElement('li');
        liAdd.setAttribute('data-type', itemCateg.value);

        liAdd.innerText = itemName.value;
        ul.appendChild(liAdd);
    })

    
})