 async function getCatPic() {
    const myStorage = window.localStorage;
     
  

   try {
  
        const rasp = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await rasp.json();
        const url = data[0].url;
     
        const idxStart = 'https://cdn2.thecatapi.com/images/'.length;
        const idxEnd = url.indexOf('/', idxStart);
        const dog_breed = url.substring(idxStart, idxEnd);

        imgCat = document.getElementById('idCat');
        myStorage.setItem('url', imgCat.src);
        imgCat.setAttribute('src', url);

        idScore = document.getElementById('pIdScore');
        myStorage.setItem('score', idScore.innerText);
        pIdScore.innerText = '0';

        
        myStorage.setItem('comment',  document.getElementById('textareaIdCommLarge').value);

    } catch (e) {
        console.log('Error while fetching:', e);
    }
}

window.onload = async () => {
    title = 'cats';

    const titleCat = document.createElement('h3');
    titleCat.innerText = 'Catstagram';
    document.body.appendChild(titleCat);

    const catDiv = document.createElement('div');
    const newPicButton = document.createElement('button');
    newPicButton.innerHTML = 'New Cat';
    catDiv.appendChild(newPicButton);

    const imgCat = document.createElement('img');
    imgCat.id = 'idCat';
    catDiv.appendChild(imgCat);
    document.body.appendChild(catDiv);
    //https://cdn2.thecatapi.com/images/DZne19xdH.jpg
    getCatPic();


    newPicButton.addEventListener('click',  () => {getCatPic()})


    const voteDiv = document.createElement('div');
    voteDiv.id = 'divIdVote';
    const scoreTitle = document.createElement('p');
    scoreTitle.id = 'pIdScoreTitle';
    const scoreTitleNode = document.createTextNode('Popularity Score:');
    scoreTitle.appendChild(scoreTitleNode);
    voteDiv.appendChild(scoreTitle);

    const score = document.createElement('p');
    score.id = 'pIdScore';
    const scoreNode = document.createTextNode('0');
    score.appendChild(scoreNode);
    voteDiv.appendChild(score);
    document.body.appendChild(voteDiv);


    const divButtonsVote = document.createElement('div');
    const btnVoteUp = document.createElement('button');
    const btnVoteDown = document.createElement('button');
    divButtonsVote.id = 'divIdButtonsVote';
    btnVoteUp.id = 'btnIdVoteUp';
    btnVoteDown.id= 'btnIdVoteDown';
    btnVoteUp.innerText = 'Upvote';
    btnVoteDown.innerText = 'Downvote';
    divButtonsVote.appendChild(btnVoteUp);
    divButtonsVote.appendChild(btnVoteDown);
    document.body.appendChild(divButtonsVote);


    btnIdVoteUp.addEventListener('click', () => {
       const vote = parseInt(pIdScore.innerText);
       pIdScore.innerText = vote + 1;
    })

    btnIdVoteDown.addEventListener('click', () => {
       const vote = parseInt(pIdScore.innerText);
       if (vote > 0) {
          pIdScore.innerText = vote - 1;
       }   
    })


    // const form = document.createElement(form);
    // form.id = 'formId';
   
    const divComm = document.createElement('div');
    divComm.id = 'divIdComm';
    const labelComm = document.createElement('label');
    labelComm.id = 'labelIdComm';
    labelComm.innerText = 'Comment:';
    divComm.appendChild(labelComm);

    const inputComm = document.createElement('input');
    inputComm.id = 'inputIdComm';
    inputComm.placeholder = 'Add a comment...';
    divComm.appendChild(inputComm);

    const btnSubmit = document.createElement('button');
    btnSubmit.id = 'btnIdSubmit';
    btnSubmit.innerText = 'Submit';
    divComm.appendChild(btnSubmit);

    document.body.appendChild(divComm);


    const textareaCommLarge = document.createElement('textarea');
    textareaCommLarge.id = 'textareaIdCommLarge';
    textareaCommLarge.cols = 100;
    textareaCommLarge.rows = 10;
    document.body.appendChild(textareaCommLarge);


   btnIdSubmit.addEventListener('click', () => {
      
       const idInput = document.getElementById('inputIdComm');
       const idTextarea = document.getElementById('textareaIdCommLarge');
       idTextarea.value = (idTextarea.value.length  > 0 ? idTextarea.value + '\n': '' ) + idInput.value;
      
   })
    
   
 
   

}