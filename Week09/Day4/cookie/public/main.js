/* ================================ PHASE 1 ================================ */
// For storing user's theme selection in the browser

function storeTheme(themeName) {
    // Your code here
    //document.cookie = "themeName=" + themeName + "; expires=31 Dec 2023";
    document.cookie = "themeName=" + themeName + "; max-age=10";
    //document.cookie = "themeName=" + themeName + ";";
}

// For restoring theme, if selected by the user in the past

function restoreTheme() {
    // Your code here
    
    let cookieVal = getCookieValueByKey('themeName');
    if (cookieVal === null) return 
    setTheme(cookieVal);
}

// For clearing theme selection from the browser's storage (reset to default)

function clearTheme() {
    // Your code here
    let cookieVal = 'themeName=none; max-age=-1';
    document.cookie = cookieVal;
}

/* ================================ PHASE 2 ================================ */

// For storing user's display name

function storeName(displayName) {
    // Your code here
    // document.cookie = "storeName=" + displayName + "; expires=31 Dec 2023";
    document.cookie = "storeName=" + displayName + "; max-age=10";
    //document.cookie = "storeName=" + displayName + ";";
}

// For restoring user's display name, if set in the past

function restoreName() {
    // Your code here
    let displayName = getCookieValueByKey('storeName');
    if (displayName === null) return 
    document.getElementById('input-display-name').value = displayName;
}

// For clearing user's display name from browser storage

function clearName() {
    // Your code here
    let cookieVal = 'storeName=none; max-age=-1';
    document.cookie = cookieVal;
}

function getCookieValueByKey(key) {
    let cookie = document.cookie;
    if (cookie === '') return null;

    cookie = cookie.split(';');
    const cookieKeyValue = cookie.filter(e => e.includes(key));
 
    if (cookieKeyValue[0] === undefined) {
       return null;
    } else {
       return cookieKeyValue[0].split('=')[1];
    }    
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
    toggleButtonSelection('dragon', false);
    toggleButtonSelection('griffin', false);
    toggleButtonSelection('wizard', false);

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



