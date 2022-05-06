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
        const breed = url.split('\/')[4];
                
        // Create element to inject 
        const elemNew = document.createElement('li');
        elemNew.innerHTML = `<figure>
                                <img src="${url}"/>
                                <figcaption>${breed}</figcaption>
                             </figure>`
     
        // Inject element into correct location
        const parent = document.getElementsByTagName("ul")[0];
        parent.append(elemNew);


    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

// Remove first dog button
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    // Select first dog
    const dogFirst = document.getElementsByTagName("li")[0];
   
    // Remove
     dogFirst.remove();
});

// Remove last dog button
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    // Select last dog
    const dogList = document.getElementsByTagName("li");
    const dogLast = dogList[dogList.length - 1];

    // Remove
    dogLast.remove();

});
