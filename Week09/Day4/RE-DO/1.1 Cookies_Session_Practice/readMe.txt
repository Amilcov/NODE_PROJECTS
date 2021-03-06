Practice: Cookies
Now, it's time to practice using Cookies in JavaScript. You'll explore both Session Cookies and Persistent Cookies to better understand their similarities and differences. Along the way, you'll use the Developer Tools in your browser (e.g. Google Chrome) to verify and debug your work.

Phase 0: Getting started
Download the starter project into a new folder on your computer.

This starter is basically the same as the one used for the Web Storage API practice. That is on purpose to help you better understand the similarities and differences between these two approaches. Therefore, if you want to run both practices at the same time, open index.js for this project, and set the port to 8082.

Note: The rest of the instructions will assume this project is running on port 8082, so if you use a different port, please adjust the localhost urls when you see them.

In your terminal, open the folder with the project (cd <folder-name>), run the package install (npm install), and start the express server (npm start). While this is a front-end JavaScript project (NOT an Express project), Cookies are only stored in the browser when a web site (NOT a standalone file, i.e. file:///).

Next, open public/main.js for editing in VS Code. This is the only file you need to modify to complete this practice. The functions you need to complete are found at the top.

Open your browser. Go to http://localhost:8082. Click on the theme buttons, enter a display name, and click the "Clear all" link to understand what the web page currently does. Refresh the page in the browser with a theme selected and display name entered to see that your settings get lost.

In your browser, open the Developer Tools and find the tab labelled "Application". Notice the item on the left named "Cookies". You can open it and select the site you are running to see any values stored there. (Probably none yet, but there will be soon!)

Hint: Review documentation on cookies anytime you need it. You might wish to open it now in a separate browser tab for quick reference.

Optional tweak to html
Your practice using web storage (that is localStorage and sessionStorage) will be a variation of this one and begin with the same starter project. For easier reference for yourself in the future (such as, while taking the assessment or coding larger projects), you may want to edit public/index.html to set the <title> and <h1> to "Practice JavaScript Cookies".

Phase 1: Theme
The first step is to keep the theme setting the user made when the browser is refreshed, the tab closed and reopened, and the browser is closed and reopened. You will use a JavaScript Cookie to make this happen.

Part A: Store a cookie
In the function named storeTheme, write the provided themeName into the document.cookie. You will need to choose an appropriate name as you set it.

HINT: Do NOT include spaces around the equal sign in the name/value pair as some browsers may include the space in the name and/or value.

Refresh the page in the browser, and click the theme buttons. Look under "Cookies" in the Developer Tools to see the item you set. There is a good change that you'll need to click the small refresh button just above the table of items (key & value columns) in order to see the current value of the cookie.

Hint: On the left side, make sure you selected the site you are on (http://localhost:8082).

Part B: Restore a cookie
In the function named restoreTheme, get the theme value out of the cookie. Since the cookie is stored as a name/value pair, you'll need to split on the equal sign (=). The first part ([0]) is the key; the second ([1]), the value.

Note: If you are thinking ahead to the time when multiple cookies are set, that's great. This practice discusses that broader solution in phase 2.

Since it won't exist the first time a user visits the site, or if they have cleared their cookies, you need to make sure you check that the value exists before setting the theme. Otherwise, you will end up with an all white page (no black headers) as the default theme gets set to null instead of "none".

Test by selecting a theme, then refreshing the browser page (big refresh button at the top of the browser, not the tiny refresh button in the Developer Tools). If your code is good, the page will show the theme colors (not black and white), and the button will look selected.

Notice in the Developer Tools that the cookie item is still set.

Part C: Clear a cookie
Since there is no function for removing a cookie, you'll need to think outside the box. Consider...

What timestamp would cause the cookie to expire right now?
How many seconds are there between that time and the current time?
If you look at the documentation, you'll see there are two ways to expire a cookie - one is with a timestamp, and the other is in seconds. In this case, seconds (e.g. zero), seems like it will be the easiest option.

In the function named clearTheme, add the code necessary to expire the theme cookie immediately.

Now, in the browser you can refresh, then click the "Clear all" link. If all is working properly, when you refresh the "Cookies" for this site in the Developer Tools you will no longer see the theme item listed.

And, when you refresh the browser, the black & white version should show.

Hint: Review part A if the header and footer show as black text on a transparent background, instead of white text on a black background.

Phase 2: Display name
The parts are essentially the same to implement storing and restoring the display name with a cookie.

However...

There is one significant challenge to overcome. In order to fully understand it, you'll want to experience it for yourself.

Part A: Store a second cookie
Implement the storeName function to set the passed in displayName as a name/value pair in document.cookie. You'll need to pick an appropriate name as you do this.

Refresh the browser, enter a display name, and click a theme button. In the Developer Tools, refresh the "Cookies" list . You should see two items - theme and display name.

Part B: Restoring two cookies
Implement the restoreName function to get the display name cookie from document.cookie in the same manner as restoreTheme. Refresh the browser and try it by entering a name, selecting and theme, and refreshing the browser.

The restores will fail, and you'll see part of each cookie in the display name <input> box. This is because all cookies are stored together in one string where the individual name/value pairs are separated by a semi-colon and a space (;).

Therefore, you need a more sophisticated approach to getting out the value for just one cookie!

Review the documentation on cookies to see one way to do it.

Hint: Consider creating a function to go from the full document.cookie to a single cookie's value, so you don't have to repeat the multiple steps of splitting that are required.

Now, modify both restoreTheme and restoreName to make each cookie restore properly when both have been set.

Tip: You do not need to write it exactly like the documentation. In fact, the document assumes that find will be successful, so you may get a JavaScript error in the Developer Tools Console (e.g. when the cookies have been reset, cleared, or never set).

Part C: Clearing second cookie
Implement the clearName function to remove the display name item from document.cookie. Good news - it should be the same as the theme where only the name needs to change.

Test by entering a display name, clicking "Clear all", refreshing the

Phase 3: Persistence
You have ready about two types of cookies - Session Cookies and Persistent Cookies. To better understand what this refers to, look at the columns for "Cookies" in the Developer Tools, and find the one named "Expires / Max-Age". You might have to make the column a little wider to see its values. Notice that "Expires / Max-Age" is currently set to Session for both cookies on this site. This means both of these cookies are currently Session Cookies.

Now it's time to explore what happens when you:

Close and reopen the browser tab (just the one with the site in it)
Quit and restart the browser (all tabs, all windows)
First, close the browser tab with the practice site in it, and reopen the practice site (http://localhost:8082 - adjust port, if needed). Notice:

The settings restored - both theme and display name (or whatever was set).
In the Developer Tools, the "Cookies" list for the practice site still shows both cookies.
This is different from the sessionStorage in the Web Storage API which reset when the browser tab was closed and reopened.

Now, quit the browser (all tabs). Then, restart the browser, and open the practice site again (http://localhost:8082 - adjust port, if needed). Notice:

Settings are back to the defaults: black and white theme, empty display name.
In the Developer Tools, the "Cookies" list for the practice site is empty.
In order to meet the requirement that the theme persist between sessions, you need make it a Persistent Cookie. Review the documentation, if you don't remember how to do this.

Modify storeTheme to persist the theme cookie.

Tip: For easy testing, using a number of seconds between 15 and 30 is good because you can test without sitting around and waiting for too long.

Now, you have a few tests to run after you refresh the browser (to get your latest code changes).

Pick a theme, refresh the browser (in fewer seconds than the max-age).
Expected Result: Selected theme is restored.
Pick a theme, wait more seconds than the max-age, refresh the browser.
Expected Result: Theme is the default (black and white).
In fewer seconds than that max-age, pick a theme, exit the browser, restart the browser, and load the practice site (http://localhost:8082)
Expected Result: Selected theme is restored.
Pick a theme, exit the browser, wait more seconds than the max-age, restart the browser, and load the practice site (http://localhost:8082)
Expected Result: Theme is the default (black and white).

Bonus Phase: Test thoroughly
Test all use cases for display name.

Enter a display name, then remove focus from the <input> field (use TAB on the keyboard or click anywhere else on the page - except "Clear all")
Expected Result: See the value in the Developer Tools for "Cookies".
Enter a display name, refresh the browser
Expected Result: See the name in the input field.
Enter a display name and select a theme, refresh the browser
Expected Result: See the name in the input field, and theme colors restored.
Reset the "Cookies" for this site in the Developer Tools, then refresh the page.
Expected Result: Empty display name <input> field, and theme colors black and white with black bars for header and footer.
Click "Clear all", then refresh the page.
Expected Result: Empty display name <input> field, and theme colors black and white with black bars for header and footer.
Click "Clear all", select a theme (but do NOT enter a display name), then refresh the browser.
Expected Result: Theme colors restored, empty display name (not "null").

Then combine the test cases for display name with the ones for the theme expiration (end of phase 3), so you are setting both values and refreshing before/after max-age sections.

Only theme should be affected by the max-age.
Display name clears on browser quit/restart, but otherwise is restored (if set).
No console errors in any of the cases.
Deleting cookies either from the Developer Tools or with the browser menu causes the site to behave as it did on first viewing (black & white theme with empty display name).
What you've learned
You put into practice the following features:

Storing, restoring, and clearing of cookies in JavaScript
Comparing and contrasting session cookies vs. persistent cookies
Viewing "Cookies" in the Developer Tools
