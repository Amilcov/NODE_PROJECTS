/* ================================ PHASE 1 ================================ */

// For storing user's theme selection in the browser

function storeTheme(themeName) {
    // Your code here
    window.localStorage.setItem('themeName', themeName);
}

// For restoring theme, if selected by the user in the past

function restoreTheme() {
    // Your code here
    const themeName = window.localStorage.getItem('themeName');
    if (themeName) setTheme(themeName);
}

// For clearing theme selection from the browser's storage (reset to default)

function clearTheme() {
    // Your code here
     window.localStorage.removeItem('themeName');
}

/* ================================ PHASE 2 ================================ */

// For storing user's display name
function storeName(displayName) {
    // Your code here
     console.log(displayName);
    window.sessionStorage.setItem('displayName', displayName);
}

// For restoring user's display name, if set in the past
function restoreName() {
    // Your code here
    const displayName = window.sessionStorage.getItem('displayName');
    if (displayName) document.getElementById("input-display-name").value = displayName;
}

// For clearing user's display name from browser storage
function clearName() {
    // Your code here
    window.sessionStorage.removeItem('displayName');
}


/* ========================================================================= */
/* ====================== DO NOT EDIT BELOW THIS LINE ====================== */
/* ========================================================================= */

// ===== HELPER FUNCTIONS

// For changing one theme button's styling to indicate which theme is selected

function toggleButtonSelection(themeName, selected) {
    const btn = document.getElementById(`theme-button-${themeName}`);
    if (btn) {
        if (selected) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    }
}

// For assigning change event to input field

function assignChangeEvent(field, handleChange) {
    const input = document.getElementById(`input-${field}`);
    if (input) {
        input.addEventListener('change', (event) => {
            handleChange(event.target.value);
        });
    }
}

// For setting value on input field

function setInputValue(field, value) {
    const input = document.getElementById(`input-${field}`);
    if (input) {
        input.value = value;
    }
}

// ===== THEME CONTROL

// Use a particular theme

function setTheme(themeName) {
    // Clear previous selection so buttons don't get stuck in selected state
    resetTheme()

    // Remember user's selection by storing it in their browser
    storeTheme(themeName);

    // Apply the theme to the page document
    document.documentElement.className = `theme-${themeName}`;

    // Show which button is selected
    toggleButtonSelection(themeName, true);
}

// Use default theme

function resetTheme() {
    // Remove selection styling from all buttons
    /*
    toggleButtonSelection('dragon', false);
    toggleButtonSelection('griffin', false);
    toggleButtonSelection('wizard', false);
    */
    const themeName = window.localStorage.getItem('themeName')
    if (themeName) {
       toggleButtonSelection(themeName, false);
    } else {
        toggleButtonSelection('dragon', false);
        toggleButtonSelection('griffin', false);
        toggleButtonSelection('wizard', false);
    }   

    // Set default theme so header and footer are contrast colors
    document.documentElement.className = `theme-none`;
}

// ===== NAME CONTROL

// For resetting the display name to empty string

function resetName() {
    setInputValue('display-name', '');
}

// For the clear/reset button

function clearAll() {
    // Remove from browser storage
    clearTheme();
    clearName();

    // Reset the page
    resetTheme();
    resetName();
}

// For setting a theme when the page loads (called by body's onload event)

function initializePage() {
    // Set default theme so header & footer have dark backgrounds
    resetTheme();

    // Restore user's previous theme selection, if it exists
    restoreTheme();

    // Assign event to name input
    assignChangeEvent('display-name', storeName);

    // Restore user's previous name selection, if it exists
    restoreName();
}
