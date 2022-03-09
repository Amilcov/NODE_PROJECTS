// Create your event listeners here
window.addEventListener('DOMContentLoaded', event => {
    alert('The DOM has loaded');
     
    const inputText = document.getElementById('red-input');
    const handleEventListenerInput =  event => {
        const inputText = event.target.value;
        if (inputText.indexOf('red') > -1) {
            event.target.style.backgroundColor = 'red';
        } else {
            event.target.style.backgroundColor = "transparent";
        }
    }
    inputText.addEventListener('input', handleEventListenerInput);

    const addItem = document.getElementById('add-item');
    const handleEventListenerUl = event => {
        const ulElem = document.querySelector('ul');
        const liElem = document.createElement('li');
        liElem.innerText = document.getElementById('list-add').value;
        ulElem.appendChild(liElem);
    }
    addItem.addEventListener('click', handleEventListenerUl)

    const inputColor = document.querySelector('#color-select');
    const handleEventListenerColor = event => {
        const colorSelectd = inputColor.value;
        const sectionParentOfColor = document.getElementById('part-3');
        sectionParentOfColor.style.backgroundColor = colorSelectd;
    }
    inputColor.addEventListener('input', handleEventListenerColor);


    const btnRemoveHandles = document.querySelector('#remove-listeners');
    btnRemoveHandles.addEventListener('click', event => {
        inputText.removeEventListener('input', handleEventListenerInput);
        addItem.removeEventListener('click', handleEventListenerUl);
        inputColor.removeEventListener('input', handleEventListenerColor);
    })

    const btnAddHandlers = document.createElement('button');
    const idSection3 = document.getElementById('part-4');
    btnAddHandlers.innerText = 'Add Handles';
    btnAddHandlers.style.marginTop = '3px';
    idSection3.appendChild(btnAddHandlers);

    btnAddHandlers.addEventListener('click', event => {
        inputText.addEventListener('input', handleEventListenerInput);
        addItem.addEventListener('click', handleEventListenerUl);
        inputColor.addEventListener('input', handleEventListenerColor);
    })


    const sectionId4 = document.createElement('section')
    const divId4 = document.createElement('div')
    sectionId4.id = 'part-5';
    sectionId4.appendChild(divId4);
    document.body.appendChild(sectionId4);

    sectionId4.addEventListener('mouseover', event => {
        divId4.innerText = (divId4.innerText.length > 0 ? divId4.innerText + '\n' : '')  +'The section it s hover over';
    })

   window.addEventListener('keypress', event => {
       console.log(event.code);
        if (event.code === 'Space') {
          alert('Spacebar was presed!');
        }
   })

})