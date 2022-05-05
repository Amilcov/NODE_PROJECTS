  function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    document.head.title = 'Adriana\'s Porofolio';
    
}

  function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.getElementsByTagName("h1")[0].innerText = 'Adriana Claudia Milcov';
    
}

  function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
     document.querySelectorAll("#header p")[0].innerText = 'Software Engineer \n passion for developing  web application\n very good at solving problems';
    
}

export {changeTitle, changeHeader, changeAboutMe}
