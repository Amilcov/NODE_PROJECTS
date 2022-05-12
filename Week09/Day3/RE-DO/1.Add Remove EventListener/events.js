// Create your event listeners here
function changeToRed(event) {
    if (event.target.value == 'red') {
        this.style.backgroundColor = 'red';
    } else {
        this.style.backgroundColor = 'transparent';
    }
}

function addItem(event) {
    const value = document.getElementById('list-add').value;
    const ul =  document.querySelector('ul');
    const li = `<li>${value}</li>`;
    ul.innerHTML += li;
}

function changeColor(event) {
  document.getElementById('part-3').style.backgroundColor = event.target.value;
}


function spaceBarHit(event) {
    if (event.code === 'Space') alert('A space bar was pressed');
}

document.addEventListener('DOMContentLoaded', () => {
    alert('DOM has been loaded');

    const redInput = document.getElementById('red-input');
    redInput.addEventListener('input', changeToRed);

    const btnAddLi = document.getElementById('add-item');
    btnAddLi.addEventListener('click', addItem)

    const colorSelect = document.getElementById('color-select');
    colorSelect.addEventListener('change', changeColor);
    
    const btnRemoveListeners = document.getElementById('remove-listeners');
    btnRemoveListeners.addEventListener('click', () => {
        redInput.removeEventListener('input', changeToRed);
        btnAddLi.removeEventListener('click', addItem);
        colorSelect.removeEventListener('change', changeColor);
    })

    const btnAddListeners = document.createElement('button');
    btnAddListeners.innerText = 'Add Listeners';
    document.getElementById('part-4').appendChild(btnAddListeners);

    btnAddListeners.addEventListener('click', () => {
        redInput.addEventListener('input', changeToRed);
        btnAddLi.addEventListener('click', addItem);
        colorSelect.addEventListener('change', changeColor);
    })


    const section5 = document.createElement('section');
    section5.setAttribute('id', 'part-5');
    document.body.appendChild(section5);

    const divLog = document.createElement('div');
    divLog.setAttribute('id', 'log-hover-div');
    divLog.innerText = 'hover me!\n';
    divLog.style.height = 'auto';
    section5.appendChild(divLog);

    divLog.addEventListener('mouseover', () => {
        divLog.innerText += 'Div has been hovered\n';
    })
    
    window.addEventListener('keydown', spaceBarHit);

})