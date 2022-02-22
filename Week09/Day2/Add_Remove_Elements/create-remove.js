// Making buttons interactive

// Add dog button
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        // URL of new dog image
        const url = data.message;

        // Get breed (Hint: Parse from URL)
        const idxStart = 'https://images.dog.ceo/breeds/'.length;
        const idxEnd = url.indexOf('/', idxStart);
        const dog_breed = url.substring(idxStart, idxEnd);

  
        // Create element to inject 
        const liElem = document.createElement('li');
        const figureElem = document.createElement('figure');
        const imageElem = document.createElement('img');
        const captionElem = document.createElement('figcaption');
        
        
        imageElem.setAttribute('src', url);
        captionElem.innerText = dog_breed;
        figureElem.appendChild(imageElem);
        figureElem.appendChild(captionElem);
    
        liElem.appendChild(figureElem);
        

        // Inject element into correct location
        let ulElem = document.getElementsByTagName('ul')[0];
        ulElem.appendChild(liElem);


    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    // Select first dog
    const firstDog = document.getElementsByTagName('li')[0];

    // Remove
    firstDog.remove();

});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    // Select last dog
    const dogs = document.getElementsByTagName('li');
    const lastDog = dogs[dogs.length - 1];
    // Remove
    lastDog.remove();
});
