const select = () => {
    /* Write queries for each of the following */

    /* PART 1 */
    // Get all seeded fruit elements
    const seedFruits = document.getElementsByClassName("seed");

    // Get all seedless fruit elements
    const seedlessFruits = document.getElementsByClassName("seedless");

    // Get first seedless fruit element
    const firstSeedlessFruits = seedlessFruits[0];


    /* PART 2 */
    // Get inner span with text "you"
    const spanElem = document.querySelectorAll("span");
    let arry = [];
    spanElem.forEach(e => { if(pos(e.innerText, 'you') >= 0 ){arry.push(e)} })
    

    // Get all children of element "wrapper"
    const wrapperElements = document.getElementById("wrapper");
    
    // Get all odd number list items in the list
    const oddElements = document.querySelectorAll("ol > .odd");
    // or const oddElements = document.querySelectorAll("li.odd");

    // Get all even number list items in the list
    const evenElements = document.querySelectorAll("ol > li:not([class])");
  

    /* PART 3 */
    // Get all tech companies without a class name
    const techElements = document.querySelector("#three > p > :not([class])");

    // Get "Amazon" list element
    const amazonElement = document.getElementsByClassName("shopping"); // return HTML
    //or  amazonElement = document.querySelectorAll(".shopping"); // return NodeList

    // Get all unicorn list elements (not the image element)
    const unicornElements = document.querySelectorAll("#three li");
    
    
}

window.onload = select;