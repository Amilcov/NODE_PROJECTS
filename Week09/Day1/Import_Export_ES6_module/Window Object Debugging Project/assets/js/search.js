export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    return document.getElementById(id);
}

export  function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`
    return document.querySelectorAll(tag)[0];
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`
    return document.getElementsByClassName(cls)[0];
    
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`
    return document.querySelectorAll(tag);
    
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`
    return document.getElementsByClassName(cls);
}


