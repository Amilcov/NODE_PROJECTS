const select = () => {
    /* Write queries for each of the following */

    /* PART 1 */
    // Get all seeded fruit elements
    console.log(document.querySelectorAll(".seed"));

    // Get all seedless fruit elements
    console.log(document.querySelectorAll(".seedless"));

    // Get first seedless fruit element
    console.log(document.querySelectorAll(".seedless")[0]);


    /* PART 2 */
    // Get inner span with text "you"
    let arrySpan = Array.from(document.querySelectorAll("span"));
    let selSpanWithYou = arrySpan.filter(e => e.innerText.includes('you'));
    console.log(selSpanWithYou);

    // Get all children of element "wrapper"
    console.log(document.getElementById("wrapper").children);

    // Get all odd number list items in the list
    console.log(document.getElementsByClassName("odd"));

    // Get all even number list items in the list
    document.querySelectorAll("#two li:not(.odd)");

    /* PART 3 */
    // Get all tech companies without a class name
   console.log(document.querySelectorAll("#three:not(class)"));


    // Get "Amazon" list element
    console.log( document.querySelectorAll("#three a.shopping"));

    // Get all unicorn list elements (not the image element)
    let arryUnicorn = Array.from(document.querySelectorAll("#three li"));
    let liUnicorn = arryUnicorn.filter(e =>  e.querySelector("img").className ==='unicorn');
    console.log(liUnicorn);
}

window.onload = select;