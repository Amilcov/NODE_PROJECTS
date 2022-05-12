async function getCatfromAPI() {
    let dataCat;

    await fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => dataCat = data)
    .catch(err => console.log(err));
         console.log('0.', dataCat);
    return dataCat;
}

async function setPicture(picHandler, data) {
    picHandler.src = data[0].url;
    picHandler.width = data[0].width;
    picHandler.heigh = data[0].height;
}

function vote(vote, score) {
    
    let newScore = score;
    vote === 'up' ? ++newScore : --newScore;
    return Math.max(0, newScore);
}

window.onbeforeunload = function() {
  

    const url = document.getElementsByTagName('img')[0].src;
    const comments = document.getElementById('comments').value;
    const vote = document.getElementById("score").innerText;
   
    localStorage.setItem('url', url)
    localStorage.setItem('comments', comments);
    localStorage.setItem('vote', vote);  
    alert( localStorage.getItem('url'));

    e.preventDefault();
}

window.onload = () => {
    const title = document.createElement('h3');
    title.innerText = 'Kitten';
    document.body.appendChild(title);

    const btnAddCat = document.createElement('button');
    btnAddCat.setAttribute("class", "center");
    btnAddCat.classList.add('top');
    btnAddCat.innerText = 'Show new Cat';
    document.body.appendChild(btnAddCat);

    const pic = document.createElement('img');
    pic.setAttribute("class", "center");
    pic.classList.add('top');
    pic.alt = 'Picture with kitten';
    document.body.appendChild(pic);


    const divUser = document.createElement('div');
    divUser.setAttribute("class", "center");
    divUser.classList.add('top');
    document.body.appendChild(divUser);

    const popularityLabel = document.createElement('label');
    popularityLabel.innerText = "Popularity score: ";
    divUser.appendChild(popularityLabel);

    const popularityScore = document.createElement('label');
    popularityScore.setAttribute('id', 'score');
    popularityScore.innerText = "0";
    divUser.appendChild(popularityScore);


    const divUserVote = document.createElement('div');
    divUserVote.setAttribute("class", "center");
    // divUser.classList.add('top');
    divUser.appendChild(divUserVote);

    const btnUpVote = document.createElement('button');
    btnUpVote.setAttribute("class", "spaceH");
    btnUpVote.innerText = 'Upvote';
    divUserVote.appendChild(btnUpVote);

    const btnDownVote = document.createElement('button');
    btnDownVote.innerText = 'Downvote';
    divUserVote.appendChild(btnDownVote);


    let addForm =`
                 <form id="commentForm" class="top">
                    <label for="commentId">Comment</label>
                    <input type ="text" id="commentId"/>
                    <button id ="submit" onsubmit="()={return false}">Submit</button>
                 </form>    
                `
document.body.insertAdjacentHTML('beforeend', addForm);

const comments = document.createElement('textarea');
comments.setAttribute("id", "comments");
comments.setAttribute("class", "center");
document.body.appendChild(comments);
              
btnAddCat.addEventListener('click',() => {
    getCatfromAPI().then(data => setPicture(pic, data)).catch(err => console.log(err));
    popularityScore.innerText = "0";
    comments.value = "";
});

btnUpVote.addEventListener('click', () => {
    popularityScore.innerHTML = vote('up', parseInt(popularityScore.innerText));
})

btnDownVote.addEventListener('click', () => {
    popularityScore.innerHTML = vote('down', parseInt(popularityScore.innerText));
})


btnSubmit = document.querySelector('#submit');
btnSubmit.addEventListener('click',(event) => {
  // event.preventDefault();
   comments.value +=  document.querySelector('#commentId').value  + '\n'; 
})

if (localStorage.getItem('url')) {
   pic.src = localStorage.getItem('url');
   popularityScore.innerText = localStorage.getItem('vote');
   comments.value = localStorage.getItem('comments');
   console.log(pic.src, popularityScore.innerText, comments.value);
} else {
  btnAddCat.click();
}



}